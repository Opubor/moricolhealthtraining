"use client";
import { enrollmentSchema } from "@/schema/enrollmentSchema";
import React, { useState, useEffect, Fragment } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  addOns,
  bundles,
  courseDataArray,
  courseDataContents,
  eLearningCourses,
  inductionOrientation,
  timeTable,
} from "@/data/Data";
import Image from "next/image";
import { toast } from "react-toastify";
import Currency from "../currency/Currency";

interface Props {
  courseId: number;
  user: any;
}

const nairaGateways = [
  { id: 1, name: "paystack", imageUrl: "/images/paystack.png" },
];
const otherCurrenciesGateways = [
  { id: 1, name: "stripe", imageUrl: "/images/stripe.png" },
  // { id: 2, name: "paypal", imageUrl: "/paypal.png" },
];

function EnrollmentSection({ courseId, user }: Props) {
  const searchParams = useSearchParams();
  const courseType = searchParams.get("type");
  const { push } = useRouter();

  const [course, setCourse] = useState("");
  const [amount, setAmount] = useState("");
  const [inputValue, setInputValue] = useState(0);

  // const handleInputChange = (event:any) => {

  //   setInputValue(Number(event) * 2);

  // };
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: zodResolver(enrollmentSchema) });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    try {
      if (user?.currency === "NGN") {
        // PAYSTACK
        const response = await fetch("/api/enrollment/paystack", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: data?.userId,
            email: data?.email,
            phone: data?.phone,
            course: data?.course,
            timeTable: data?.timeTable,
            noOfDays: data?.noOfDays,
            noOfUsers: data?.noOfUsers,
            paymentType: "Paystack",
          }),
        });
        setLoading(false);
        let x = response.status;
        if (x === 404) {
          return toast.error("Course not found", {
            position: "top-right",
          });
        } else if (x === 200) {
          let res = await response.json();
          return push(res?.url);
        }
      } else if (user?.currency !== "NGN") {
        // STRIPE
        const response = await fetch("/api/enrollment/stripe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: data?.userId,
            email: data?.email,
            phone: data?.phone,
            course: data?.course,
            timeTable: data?.timeTable,
            noOfDays: data?.noOfDays,
            noOfUsers: data?.noOfUsers,
            // paymentType: "Stripe",
          }),
        });
        setLoading(false);
        let x = response.status;
        if (x === 404) {
          return toast.error("Course not found", {
            position: "top-right",
          });
        } else if (x === 200) {
          let res = await response.json();
          return push(res?.url);
        }
      }
    } catch (error) {
      return console.log(error);
    }
  };

  useEffect(() => {
    if (courseType === "inclass") {
      const courseDesc = courseDataContents.find(
        (item) => item.id === Number(courseId)
      );
      let courseName = courseDesc?.content;
      setAmount(courseDesc?.price as string);
      return setCourse(courseName as string);
    } else if (courseType === "eLearningCourse") {
      const courseDesc = eLearningCourses.find(
        (item) => item.id === Number(courseId)
      );
      let courseName = courseDesc?.title;
      setAmount(courseDesc?.price as string);
      return setCourse(courseName as string);
    } else if (courseType === "bundle") {
      const courseDesc = bundles.find((item) => item.id === Number(courseId));
      let courseName = courseDesc?.title;
      setAmount(courseDesc?.price as string);
      return setCourse(courseName as string);
    } else if (courseType === "induction") {
      const courseDesc = inductionOrientation.find((item) => item?.id === 0);
      let courseName = courseDesc?.title;
      setAmount(courseDesc?.price as string);
      return setCourse(courseName as string);
    } else if (courseType === "addOns") {
      const courseDesc = addOns.find((item) => item?.id === Number(courseId));
      let courseName = courseDesc?.name;
      setAmount(courseDesc?.price as string);
      return setCourse(courseName as string);
    }
  }, []);

  return (
    <>
      {courseType === "addOns" ? (
        <>
          <h5 className="mb-2 mt-2 fw-bold">
            {course} -{" "}
            <Currency currency={user?.currency} price={Number(amount)} />
          </h5>
        </>
      ) : (
        <>
          <p className="mb-2 mt-2 fw-bold">
            {course} -{" "}
            <Currency currency={user?.currency} price={Number(amount)} />
          </p>

          {/* === Time-table forInclass, E-Learning, Induction */}
          {["inclass", "eLearningCourse", "induction"].includes(
            courseType as string
          ) && (
            <input
              type="hidden"
              value="Your time table will be forwarded to you by Moricol Team"
              {...register("timeTable", { required: true })}
            />
          )}
          {/* ===Bundle 4 */}
          {courseType === "bundle" && course === "Bundle 4" && (
            <div className="border rounded p-3">
              <h6 className="fw-bold">Time Table</h6>
              <input
                type="hidden"
                value="8hrs Daily/6 days/48hrs total/ Monday – Saturday/ 9am-5pm"
                {...register("timeTable", { required: true })}
              />
              <p className="mt-1">
                8hrs Daily/6 days/48hrs total/ Monday – Saturday/ 9am-5pm
              </p>
            </div>
          )}
          {/* ===Bundle 5=== */}
          {courseType === "bundle" && course === "Bundle 5" && (
            <div className="border rounded p-3">
              <h6 className="fw-bold">Time Table</h6>
              <input
                type="hidden"
                value="Enjoy the flexibility of learning at your own pace and comfort"
                {...register("timeTable", { required: true })}
              />
              <p>
                Enjoy the flexibility of learning at your own pace and comfort
              </p>
            </div>
          )}
          {/* ===Bundle 1-3=== */}
          {courseType === "bundle" &&
            ["Bundle 1", "Bundle 2", "Bundle 3"].includes(course) && (
              <div className="d-md-flex w-md-50 gap-2 mb-4">
                {timeTable.map((data) => (
                  <div className="form-check">
                    <input
                      type="radio"
                      value={`${data?.name} - ${data?.description}`}
                      id={`gateway-${data.id}`}
                      className="form-check-input"
                      {...register("timeTable", { required: true })}
                      checked
                    />
                    <label
                      htmlFor={`gateway-${data.id}`}
                      className={`form-check-label border p-2`}
                    >
                      <div className="border rounded p-3">
                        <h6 className="fw-bold">{data?.name}</h6>
                        <p>{data?.description}</p>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            )}
        </>
      )}
      <div className="d-flex align-items-left justify-items-left mt-2 row overflow-hidden">
        <p>Please enter your details below as part of the enrolment process</p>
      </div>

      {session?.user?.role === "company" && courseType !== "addOns" && (
        <div className="pb-4">
          <h5 className="text-center pt-4 discount-rates-header">
            DISCOUNT RATES
          </h5>
          <div className="d-md-flex align-items-center justify-content-center gap-2">
            {/* ===1=== */}
            <div className="rounded w-full discount-plans mt-2">
              <div className="discount-rates bg-primary px-4 py-2 d-flex align-items-center justify-content-center gap-2">
                <div>
                  <i className="fa-solid fa-badge text-white"></i>
                </div>
                <p className="text-white fw-bold text-large">Save 5%</p>
              </div>
              <div className="discount-rates-text px-4 py-2">
                <p className="text-primary">
                  When you purchase <br></br> course for 1-5 Staffs
                </p>
              </div>
            </div>

            {/* ===2=== */}
            <div className="rounded w-full discount-plans mt-2">
              <div className="discount-rates bg-success px-4 py-2 d-flex align-items-center justify-content-center gap-2">
                <div>
                  <i className="fa-solid fa-badge text-white"></i>
                </div>
                <p className="text-white fw-bold text-large">Save 10%</p>
              </div>
              <div className="discount-rates-text px-4 py-2">
                <p className="text-success">
                  When you purchase <br></br> course for 6-9 Staffs
                </p>
              </div>
            </div>

            {/* ===3=== */}
            <div className="rounded w-full discount-plans mt-2">
              <div className="discount-rates bg-danger px-4 py-2 d-flex align-items-center justify-content-center gap-2">
                <div>
                  <i className="fa-solid fa-badge text-white"></i>
                </div>
                <p className="text-white fw-bold text-large">Save 20%</p>
              </div>
              <div className="discount-rates-text px-4 py-2">
                <p className="text-danger">
                  When you purchase <br></br> course for over 10 Staffs
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <p className="text-center">Choose Your Preferred Payment Method</p> */}

  
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          {session?.user?.role === "student" && (
            <Fragment>
              <div className="col-xl-12">
                <div className="tf__login_imput">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <p className="text-danger text-sm">Email is required.</p>
                  )}
                </div>
              </div>

              <div className="col-xl-12 mt-4">
                <div className="tf__login_imput">
                  <label>Phone number</label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    {...register("phone", { required: true })}
                  />
                  {errors.phone && (
                    <p className="text-danger text-sm">
                      Phone Number is required.
                    </p>
                  )}
                </div>
              </div>
            </Fragment>
          )}

          {session?.user?.role === "company" && (
            <Fragment>
              <div className="col-xl-12">
                <div className="tf__login_imput">
                  <label>Number of Staffs</label>
                  <input
                    type="number"
                    placeholder="No. of Staffs"
                    defaultValue={1}
                    min={1}
                    {...register("noOfUsers", { required: true })}
                    // onChange={(event) => handleInputChange(event.target.value)}
                  />
                  {errors.noOfUsers && (
                    <p className="text-danger text-sm">
                      Please enter the number of staffs.
                    </p>
                  )}
                </div>
                {/* <p>{inputValue}</p> */}
              </div>
            </Fragment>
          )}

          {courseType === "addOns" && course !== "Computer Appreciation" && (
            <div className="col-xl-12 mt-4">
              <div className="tf__login_imput">
                <label>No. of Days</label>
                <input
                  type="number"
                  min={1}
                  defaultValue={1}
                  {...register("noOfDays", { required: true })}
                />
                {errors.noOfDays && (
                  <p className="text-danger text-sm">No of Days is required.</p>
                )}
              </div>
            </div>
          )}

          <div className="col-xl-12">
            <div className="d-flex align-items-center justify-items-center w-100 mt-3">
              <button
                onClick={() => {
                  setValue("userId", session?.user.id),
                    setValue("course", course);
                }}
                type="submit"
                className="btn btn-success w-100"
              >
                {loading ? "Loading" : "Enroll"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default EnrollmentSection;

// {user?.currency === "NGN" && (
//   <div className="flex justify-center items-center gap-2">
//     {nairaGateways.map((gateway) => (
//       <div key={gateway?.id}>
//         <input
//           type="radio"
//           value={gateway.name}
//           id={`gateway-${gateway.id}`}
//           className="peer hidden"
//           {...register("paymentType", { required: true })}
//         />
//         <label
//           htmlFor={`gateway-${gateway.id}`}
//           className={`flex justify-between items-center gap-2 w-32 px-2 py-2 rounded-md border peer-checked:border-2 peer-checked:border-themeColor peer-checked:shadow-lg border-gray-300`}
//         >
//           <Image
//             src={gateway.imageUrl}
//             alt="Arrow"
//             className="h-8 object-contain"
//             width={3000}
//             height={0}
//             priority
//           />
//         </label>
//       </div>
//     ))}
//   </div>
// )}
// {user?.currency !== "NGN" && (
//   <div className="flex justify-center items-center gap-2">
//     {otherCurrenciesGateways.map((gateway) => (
//       <div key={gateway?.id}>
//         <input
//           type="radio"
//           value={gateway.name}
//           id={`gateway-${gateway.id}`}
//           className="peer hidden"
//           {...register("paymentType", { required: true })}
//         />
//         <label
//           htmlFor={`gateway-${gateway.id}`}
//           className={`flex justify-between items-center gap-2 w-32 px-2 py-2 rounded-md border peer-checked:border-2 peer-checked:border-themeColor peer-checked:shadow-lg border-gray-300`}
//         >
//           <Image
//             src={gateway.imageUrl}
//             alt="Arrow"
//             className="h-8 object-contain"
//             width={3000}
//             height={0}
//             priority
//           />
//         </label>
//       </div>
//     ))}
//   </div>
// )}

