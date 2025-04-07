import arrow from "./assets/images/icon-arrow.svg";
import React,{useState} from "react";
import "./Age.css";

function Age(){

    const[inpyear,setInpYear]=useState("");
    const[inpmonth,setInpMonth]=useState("");
    const[inpday,setInpDay]=useState("");

    const[emptyError,setemptyError]=useState(false);
    const[message,setMessage]=useState("");

    const[Invaliderror,setInvalidError]=useState(false);

    const[dayMsg,setDayMsg]=useState("");
    const[monthMsg,setMonthMsg]=useState("");
    const[yearMsg,setYearMsg]=useState("");



    const[year,setYear]=useState("--");
    const[month,setMonth]=useState("--");
    const[day,setDay]=useState("--");
    

    const date=new Date();


    function handleClick(){

        function isValidate(inpday,inpmonth,inpyear){

            const dt=new Date(inpday,inpmonth-1,inpyear);
            return dt.getFullYear()===inpyear && dt.getMonth()===inpmonth && dt.getDate()===inpday;
        }

        if(!isValidate(inpday,inpmonth,inpyear)){
            setInvalidError(true);
            setMessage("");
            setemptyError(false);

            console.log("hi")

            setDayMsg("Must be a valid day");
            setMonthMsg("Must be a valid month");
            setYearMsg("Must be in the past");

            return;
        }

        if(inpyear==="" || inpday==="" || inpmonth===""){
            setemptyError(true);

            setMessage("This field is required");

            return;
        }
        else{

            setemptyError(false);
            setInvalidError(false);

            let ansYear=date.getFullYear()-inpyear;
            let ansMonth=date.getMonth()-inpmonth;
            let ansDay=date.getDate()-inpday;
    
    
            if (ansDay<0){
                ansMonth--;
                let prevMonth=new Date(date.getFullYear(),date.getMonth(),0);
                ansDay+=prevMonth.getDate();
            }
    
            if(ansMonth<0){
                ansYear--;
                ansMonth+=12
            }

            setYear(ansYear);
            setMonth(ansMonth);
            setDay(ansDay);
        }
    }
    
    return (
        <>
        <div className="outer-cont">
            <div className="input-cont">

                <div className={
                    emptyError||Invaliderror?(
                        "not-quest"
                    ):
                    "quest"}
                >
                    <label htmlFor="day">DAY</label>
                    <input 
                        id="day" 
                        type="number" 
                        placeholder="DD"
                        value={inpday}
                        onChange={(e)=>setInpDay(e.target.value)}
                        min={1} max={31}
                    />
                    {emptyError?
                    (
                        <span className="emptyError-msg">
                            {message}
                        </span>
                    )
                    :Invaliderror ? 
                    
                        <span className="emptyError-msg">
                            {dayMsg}
                        </span>
                    : null}
           </div>

                <div className={
                    emptyError||Invaliderror?(
                        "not-quest"
                    ):
                    "quest"}>
                    <label htmlFor="month">MONTH</label>
                    <input 
                        id="month" 
                        type="number" 
                        placeholder="MM"
                        value={inpmonth}
                        onChange={(e)=>setInpMonth(e.target.value)}
                        min={1} max={12}
                    />
                    {emptyError?
                    (
                        <span className="emptyError-msg">
                            {message}
                        </span>
                    )
                    :Invaliderror ? 
                    
                        <span className="emptyError-msg">
                            {monthMsg}
                        </span>
                    : null}
           </div>

                <div className={
                    emptyError||Invaliderror?(
                        "not-quest"
                    ):
                    "quest"} >
                    <label htmlFor="year">YEAR</label>
                    <input 
                        id="year" 
                        type="number"
                        placeholder="YYYY"
                        value={inpyear}
                        onChange={(e)=>setInpYear(e.target.value)}
                        max={2025}
                    />

                    {emptyError?
                        (
                            <span className="emptyError-msg">
                                {message}
                            </span>
                        )
                        :Invaliderror ? 
                        
                            <span className="emptyError-msg">
                                {yearMsg}
                            </span>
                        : null
                    }
           </div>
            </div>

            <hr></hr>

            <div className="button-cont">
            
                <button
                    onClick={handleClick}
                >
                    <img src={arrow}/>
                </button>
            </div>

            <div className="ans-cont">
                <h1><span style={{color:"hsl(259, 100%, 65%)"}}>{year}</span> years</h1>
                <h1><span style={{color:"hsl(259, 100%, 65%)"}}>{month}</span> months</h1>
                <h1><span style={{color:"hsl(259, 100%, 65%)"}}>{day}</span> days</h1>
            </div>
        </div>
        </>
    )
}

export default Age;