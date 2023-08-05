OOP is simply a programming paradigm where an object is considered to be as unit of representation of an entity.

1. encapsulation -

Encapsulation means keeping properties and methods private inside a class, so that they are not accessible from outside that class.

2. abstraction -

Abstraction means hiding certain details that don't matter to the user and only showing essential features or functions.

3. polymorphism -

The ability of instances to derive their properties and methods from their parent class is known as polymorphism.

4. Interitance -
   Inheritance makes all properties and methods available to a child class. This allows us to reuse common logic and to model real-world relationships.

in JS
We have an object linked to a prototype. Prototypes contain all methods and these methods are accessible to all objects linked to this prototype. This is called Prototypal Inheritance (or Prototypal Delegation).

5.  const Sedan=function(model,color,transmission,engine){
    this.wheels=4;
    Vechile.call(this,model,color,transmission,engine);

}

Sedan.prototype=Object.create(Vechile.prototype);
Sedan.prototype.constructor=Sedan;
