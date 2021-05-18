import React from "react"
import Card from "./Card"
const CardSection = () =>{
    return(
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
          <div className="col-4">
            <Card title="Prahlad" buttonText="My App 1"/>
          </div>
          <div className="col-4">
            <Card title="Parag" buttonText="My App 2" link="https://images.pexels.com/photos/4334088/pexels-photo-4334088.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
          </div>
          <div className="col-4">
            <Card title="Sriram" buttonText="My App 3"/>
          </div>
        </div>
      </div>
    </section>
    )
}

export default CardSection;