在ES6中，javascript实现**类定义**、**类继承**及类中定义**变量**，**构造方法**，**一般方法**，**静态方法**

>代码中均有注释

```
class Car{
  //Car的构造函数
  constructor(name){
    this.name = name;
  }
  
  //Car的一般方法getInfo
  getInfo(){
    console.log(this.name);
  }
  
  //Car的静态方法show
  static show(){
    console.log("car");
  }
}

class Bwm extends Car{
  //Bwm的构造函数
  constructor(name,type){
    //调用父类的构造方法
    super(name);
    this.type = type;
  }
  
  //Bwm的一般方法getInfo2
  getInfo2(){
    //返回父类的方法getInfo
    return super.getInfo();
  }
  
  //Bwm的静态方法show2
  static show2(){
    //返回父类的静态方法show
    return super.show();
  }
}

var car = new Car("car");
car.getInfo(); // car
Car.show(); // car

var bwm = new Bwm("bwm","ss");
bwm.getInfo2(); // bwm
Bwm.show2(); // car
```
