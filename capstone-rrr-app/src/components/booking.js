import { useState } from "react";
import Axios from "axios";
import "..//assets/css/booking.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function BookAppointment () {

    const [ name, setName ] = useState("");
    const [ mobile, setMobile ] = useState("");
    const [ petName, setPetName] = useState("");
    const [ petType, setPetType] = useState("");
    const [ serviceType, setServiceType] = useState("");
    const [ groomerName, setGroomerName ] = useState("");
    const [ time, setTime] = useState("");
    const [startDate, setStartDate] = useState(new Date());

    const formData = {
        ownerName: name,
        contactNum: mobile,
        petName: petName,
        petType: petType,
        serviceType: serviceType,
        groomerName: groomerName,
        date: startDate,
        time: time,
      };
    
        const addAppointment = () => {
          Axios.post("http://localhost:3001/appointments/add", formData).then(() => {
          console.log("Data added successfully.")
          })
          setName("");
          setMobile("");
          setPetName("");
          setPetType("");
          setServiceType("");
          setGroomerName("");
          setStartDate("");
          setTime("");
      };
    
    const filterWeekends = (date) => {
        return date.getDay() !== 0 && date.getDay() !== 6; // Disable Sundays (0) and Saturdays (6)
    };
    const filterThF = (date) => {
        return date.getDay() !== 4 && date.getDay() !== 5; // Disable Thursdays (4) and Fridays (5)
    };
     

    return (
        <>
            <div className="booking-form">
                <h2>Book a Pet Grooming Appointment</h2>
                <form action="#">
                    <div className="form-group">
                        <label htmlFor="ownerName">Name: </label>
                        <input type="text" id="ownerName" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="contactNum">Contact Number: </label>
                        <input type="text" id="contactNum" value={mobile} onChange={(e) => setMobile(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="petName">Pet's Name: </label>
                        <input type="text" id="petName" value={petName} onChange={(e) => setPetName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="petType">Pet Type: </label>
                        <select id="petType" value={petType} onChange={(e) => setPetType(e.target.value)}>
                            <option disabled></option>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="service_type">Service Type:</label>
                        <select
                            id="serviceType"
                            name="serviceType"
                            value={serviceType}
                            onChange={(e) => setServiceType(e.target.value)}
                            required
                        >
                            <option disabled></option>
                            <option value="1">Full Grooming - Small Breed (10kg below)</option>
                            <option value="2">Full Grooming - Medium Breed (11-30kg below)</option>
                            <option value="3">Full Grooming - Large Breed (31-40kg below)</option>
                            <option value="4">Full Grooming - Giant Size (41-50kg above)</option>
                            <option value="6">Full Grooming - Cat</option>
                            <option value="8">Shampoo & Blow Dry for Small Breed</option>
                            <option value="9">Bath & Blow Dry - Small Breed (10kg below)</option>
                            <option value="10">Bath & Blow Dry - Medium-Large (11kg and up)</option>
                            <option value="11">Medicated Bath & Blow Dry - Small Breed (10kg below)</option>
                            {/* Add more service options as needed */}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="groomerName">Select Groomer:</label>
                        <select
                            id="groomerName"
                            name="groomerName"
                            value={groomerName}
                            onChange={(e) => setGroomerName(e.target.value)}
                            required
                        >
                            <option disabled></option>
                            <option value="Fonz Dun">Fonz Dun</option>
                            <option value="Jessy Kah">Jessy Kah</option>
                            <option value="Luna Montenegro">Luna Montenegro</option>
                            <option value="Roman Carlos">Roman Carlos</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Appointment Date:</label>
                        {(groomerName === "Fonz Dun" || groomerName === "Jessy Kah") &&
                        <DatePicker
                            id="date"
                            name="date"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            filterDate={filterWeekends}
                            dateFormat="yyyy/MM/dd"
                            required
                        />
                        }
                         {(groomerName === "Luna Montenegro" || groomerName === "Roman Carlos") &&
                        <DatePicker
                            id="date"
                            name="date"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            filterDate={filterThF}
                            dateFormat="yyyy/MM/dd"
                            required
                        />
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="time">Select Time Slot:</label>
                        { (groomerName === "Fonz Dun" || groomerName === "Luna Montenegro") &&
                        <select
                            id="time"
                            name="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                        >
                            <option disabled></option>
                            <option value="8:00">8:00AM</option>
                            <option value="9:00">9:00AM</option>
                            <option value="10:00">10:00AM</option>
                            <option value="11:00">11:00AM</option>
                            <option value="13:00">1:00PM</option>
                            <option value="14:00">2:00PM</option>
                            <option value="15:00">3:00PM</option>
                            <option value="16:00">4:00PM</option>
                        </select>
                        }
                        { (groomerName === "Jessy Kah" || groomerName === "Roman Carlos") &&
                        <select
                            id="time"
                            name="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                        >
                            <option disabled></option>
                            <option value="11:00">11:00AM</option>
                            <option value="12:00">12:00NN</option>
                            <option value="14:00">2:00PM</option>
                            <option value="15:00">3:00PM</option>
                            <option value="16:00">4:00PM</option>
                            <option value="17:00">5:00PM</option>
                            <option value="18:00">6:00PM</option>
                            <option value="19:00">7:00PM</option>
                        </select>
                        }
                    </div>
                    <button className="book-btn" onClick={addAppointment}>Book Appointment</button>
                </form>
            </div>
        </>
    )
}

export default BookAppointment;