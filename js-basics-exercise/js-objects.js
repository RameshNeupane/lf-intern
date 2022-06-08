//***************************** */
// Define an object containing information about yourself.
//  The object needs to include 'name', 'address', 'emails', 'interests' and 'education'.
// The 'education' key needs to be an array of objects containing keys 'name' and 'enrolledDate'.

// Using the object defined previously iterate over the 'education' key and print a list of output in the console as follows:
// Name: ABC School of Schoolery, Date: 2000
// Name: BCD School of Trickery, Date: 2006

//************************************************ */

const myObj = {
  name: "Ramesh Neupane",
  address: "Kalanki Kathmandu",
  emails: "neupaneramesh555@gmail.com",
  interests: ["coding", "blogging", "travelling"],
  education: [
    {
      name: "Secondary Level",
      enrollDate: "2061 BS",
    },
    {
      name: "Higher Secondary",
      enrollDate: "2071 BS",
    },
    {
      name: "Bachelors Level",
      enrollDate: "2074 BS",
    },
  ],
};

const { education } = myObj;
education.forEach((e) => {
  console.log(`Name: ${e.name}, Date: ${e.enrollDate}\n`);
});
