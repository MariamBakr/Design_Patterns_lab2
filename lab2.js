
///////////////////Q1//////////////////

class Vehicle{
    constructor(mileage,price){
        this.mileage=mileage;
        this.price=price
    }
}
class Car extends Vehicle{

    constructor(mileage,price, owner_Cost, warranty, seating_Capacity, fuel){
        super (mileage,price)
        this.owner_Cost=owner_Cost
        this.warranty=warranty
        this.seating_Capacity=seating_Capacity
        this.fuel=fuel
    }   
}
class Bike extends Vehicle{
    
    constructor(mileage, price, no_Cylinders, no_Gear, cooling, wheel_Type, tank_Size){
        super (mileage,price)
        this.no_Cylinders=no_Cylinders
        this.no_Gear=no_Gear
        this.cooling=cooling
        this.wheel_Type=wheel_Type
        this.tank_Size=tank_Size
    }
}
class Ford extends Car{

    constructor(owner_Cost, warranty, seating_Capacity, fuel, model_Type){
        super (owner_Cost, warranty, seating_Capacity, fuel)
    this.model_Type=model_Type
    }
}
class Audi extends Car {

    constructor(owner_Cost, warranty, seating_Capacity, fuel, model_Type){
        super (owner_Cost, warranty, seating_Capacity, fuel)
    this.model_Type=model_Type
    }
}
class Bajaj extends Bike{
    
    constructor(no_Cylinders, no_Gear, cooling, wheel_Type, tank_Size, make_Type){
        super(no_Cylinders, no_Gear, cooling, wheel_Type, tank_Size)
        this.make_Type=make_Type
    }
}
class Tvs extends Bike{
    
    constructor(no_Cylinders, no_Gear, cooling, wheel_Type, tank_Size, make_Type){
        super(no_Cylinders, no_Gear, cooling, wheel_Type, tank_Size)
        this.make_Type=make_Type
    }
}

let ford=new Ford()
console.log(ford)

let audi = new Audi()
console.log(audi)

let bajaj= new Bajaj()
console.log(bajaj)

let tvs= new Tvs()
console.log(tvs)

///////////////////Q2//////////////////

class Computer{
    constructor(screen_Size, storage, brand){
        this.screen_Size=screen_Size
        this.storage=storage
        this.brand=brand
    }
    clac_Sum(x,y){
        this.x=x
        this.y=y
        let sum = x + y;
        return sum
    }
    weather(degrees){
        this.degrees=degrees
        if (this.degress>30){
            console.log("sunny")
        }
        else if(this.degrees<25){
            console.log("cold")
        }
        else{
            console.log("moderate temp")
        }
    }
}

class Laptop extends Computer{
    constructor(screen_Size, storage, brand, keyboard){
        super(screen_Size, storage, brand)
        this.keyboard=keyboard
    }
    calc_Diff(x,y){
        this.x=x
        this.y=y
        let diff = x - y;
        return diff
    }
}

class Smartphone extends Computer {
    constructor(screen_Size, storage, brand, battery_Life){
        super(screen_Size, storage, brand)
        this.battery_Life=battery_Life
    }
    call_Cost(minutes, minute_Rate){
        this.minutes=minutes
        this.minute_Rate=minute_Rate
        let cost= minutes * minute_Rate
        return cost
    }
}


///////////////////Q3//////////////////

class Employee{
    constructor(name, job_Title){
        this.name=name
        this.job_Title=job_Title
    }
    calc_Weekly_Pay(){
    }
}


class Hourly_Employee extends Employee {
    constructor(name, job_Title, hour_Rate, worked_Hours_Day){
        super(name, job_Title)
        this.hour_Rate=hour_Rate
        this.worked_Hours_Day=worked_Hours_Day
    }
    calc_Weekly_Pay(hour_Rate, worked_Hours_Day){
        let monthly_Sal = hour_Rate * worked_Hours_Day * 5 * 4
        return monthly_Sal
    }
}


class Salaried_Employed extends Employee {
    constructor(name, job_Title, week_Rate){
        super(name, job_Title)
        this.week_Rate=week_Rate
    }
    calc_Weekly_Pay(week_Rate){
    let monthly_Sal=  week_Rate * 4
    return monthly_Sal
    }
}
