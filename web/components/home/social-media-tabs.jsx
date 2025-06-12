"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const CourseTabs = ({isCenter, centerNameSelected, stateSelected}) => {
  
    // const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState(categoriesTabs[0]._id);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await CourseService.categoryList();
//         const result = response.data;
//         if (result?.length > 0) {
//           setCategories(result);
//           setActiveTab(result[0]?._id); // Set first category as active
//         }
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

const categoriesTabs = [
    {
      _id: "1",
      title: "All",

    },
    {
      _id: "2",
      title: "Facebook",
      iconActive: "/media-tabs/facebook.svg",
        },
    {
      _id: "3",
      title: "Twitter",
      iconActive: "/media-tabs/facebook.svg",
          },
    {
      _id: "4",
      title: "Youtube",
      iconActive: "/media-tabs/facebook.svg",
      },
      {
      _id: "",
      title: "Instagram",
      iconActive: "/media-tabs/facebook.svg",
      },
  ];

  const catData=[
    {
        _id:"1",
        tabData:[
          {
            profileImg:"",
            desc:"",
            title:"",
          },
            {
            profileImg:"",
            desc:"",
            title:"",
          }
        ]
    }
  ]




  return (
    <section className="">
      <div className="">
        <div>
          <div className="">
  {categoriesTabs.map((category) => (
    <button
      key={category._id}
      className={`${activeTab === category._id ? "" : ""}`}
      type="button"
      onClick={() => setActiveTab(category._id)}
    >
      {category.iconActive && (
        <img
          src={category.iconActive}
          alt={category.title}
          className=""
          style={{ width: 24, height: 24 }}
        />
      )}
      {category.title}
    </button>
  ))}
</div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#F1F8FF",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <div className="">
          {/* Tabs Content */}
          <div className="" id="">
            {categories.map((category) => (
              <div
                key={category._id}
                className={` ${
                  activeTab === category._id ? "" : ""
                }`}
                role="tabpanel"
              >
                {/* <div className="">
                  {category?.courseDetail.map((course) => (
                    course
                  ))}
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseTabs;
