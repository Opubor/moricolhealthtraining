import React from "react";

const CategorySection = () => {
  return (
    <section className="tf__categories time_table mt_95">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-8 col-lg-6 m-auto wow fadeInUp">
            <div className="tf__heading_area mb_15">
              <h5>TIME-TABLE</h5>
              <h2>Tailor Your Learning Adventure: Select Your Ideal Course Timetable from Our Diverse Options!</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-md-6 wow fadeInUp">
            <div className="tf__single_category light_blue">
              <div className="tf__single_category_icon">
                <i className="fa fa-book"></i>
              </div>
              <div className="tf__single_category_text">
                <h3>Regular classes (Bundles 1 - 3)</h3>
                <p>2days a week/9am-2pm <br></br>5weeks/Friday + Saturday <br></br> 10hrs weekly 50hrs total</p>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-6 wow fadeInUp">
            <div className="tf__single_category blue">
              <div className="tf__single_category_icon">
                <i className="fa fa-book"></i>
              </div>
              <div className="tf__single_category_text">
                <h3>Master classes (Bundles 1 - 3)</h3>
                <p>2weeks/ Monday-Friday <br></br>9am-2pm 25hrs weekly <br></br> 50hrs total</p>
              </div>
            </div>
          </div>
        
          <div className="col-xl-6 col-md-6 wow fadeInUp">
            <div className="tf__single_category gray">
              <div className="tf__single_category_icon">
                <i className="fa fa-book"></i>
              </div>
              <div className="tf__single_category_text">
                <h3>Online Courses (Bundle 5)</h3>
                <p>Enjoy the flexibility <br></br>of learning at your own pace <br></br> and comfort</p>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-6 wow fadeInUp">
            <div className="tf__single_category orange">
              <div className="tf__single_category_icon">
                <i className="fa fa-book"></i>
              </div>
              <div className="tf__single_category_text">
                <h3>Stand Alone Course (Bundle 4)</h3>
                <p>8hrs Daily/6 days/48hrs total<br></br> Monday – Saturday <br></br>9am-5pm</p>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
