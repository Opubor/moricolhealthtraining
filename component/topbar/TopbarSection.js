import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../../app/api/auth/[...nextauth]/options";
import SignOut from "./SignOut";
import Link from "next/link";
import prisma from "@/lib/prisma-client";

export const getUser = async (id) => {
  return await prisma.user.findFirst({
    where: { id: id },
    include: { Enrollment: true, Payment:true },
  });
};
async function TopbarSection({ style }) {
  const session = await getServerSession(options);
  const user = await getUser(session?.user?.id);

  return (
    <section className={style}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-6 d-none d-md-block">
            <div className="tf__topbar_left d-flex flex-wrap align-items-center">
              <p>Visit our social pages:</p>
              <ul className="d-flex flex-wrap">
                <li>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/profile.php?id=100094794262869&mibextid=LQQJ4d"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>

                <li>
                  <a
                    target="_blank"
                    href="https://instagram.com/moricol2022?igshid=OGQ5ZDc2ODk2ZA=="
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6 col-md-6 ">
            <div className="tf__topbar_right">
              <SignOut user={user} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopbarSection;
