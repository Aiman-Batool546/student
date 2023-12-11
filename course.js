import React,{useState} from 'react'

function Course() {
  const [formData, setFormData] = useState({
    courseName: '',
    courseCode: '',
    description: '',
  });

  // Function to handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions with the form data here
    console.log('Form submitted with data:', formData);
  };

  return (
    <div class="div">
 <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={formData.courseName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="courseCode">Course Code:</label>
          <input
            type="text"
            id="courseCode"
            name="courseCode"
            value={formData.courseCode}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description"> Course Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <button  id=" butt"type="submit"><a href="./dashboard.js">Submit</a></button>
        </div>
      </form>


    </div>
  )
}

export default Course