const getArrayArgs = function () {
  return Array.from(arguments);
};
console.log(getArrayArgs(2, 4, 5, "Hello, world!"));
const Tasks = function (title) {
  this.title = title;
  this.taskLists = [];
  this.showTasks = function () {
    console.log(`---${this.title}---`);
    this.taskLists.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
  };
  this.add = function (item) {
    this.taskLists = [item, ...this.taskLists];
  };
};

const myTasks = new Tasks("Daily Tasks");
myTasks.add("Washed cloths done");
myTasks.add("Buy Bedsheet done");
myTasks.add("Checkmark in the task sheet");
myTasks.showTasks();

//  Checking if 2 arrays are same or not

const hasSameContents = (arr1, arr2) => {
  const stringA = arr1.map((el) => JSON.stringify(el));
  const stringB = arr2.map((el) => JSON.stringify(el));
  return [
    arr1.length === arr2.length,
    ...stringA.map((el) => stringB.includes(el)),
    ...stringB.map((el) => stringA.includes(el)),
  ].every((el) => el);
};
// Creating customised properties
const User = function () {
  let name = "";
  Object.defineProperties(this, {
    id: {
      enumerable: true,
      value: `UID-${parseInt(Math.random() * 30000)}-XZ`,
    },
    name: {
      enumerable: true,
      get() {
        return name;
      },
      set(value) {
        name = value.toUpperCase();
      },
    },
    age: {
      enumerable: true,
      get() {
        return age;
      },
      set(value) {
        age = value;
      },
    },
  });
};
let subhash = new User();
subhash.name = "Subhash Kandhway";
subhash.age = 21;
console.log(subhash.id, subhash.name, subhash.age);
// Deepclone
const deepClone = function (obj) {
  let tempObj = {};
  for (const [key, value] of Object.entries(obj)) {
    tempObj = {
      ...tempObj,
      [key]:
        typeof value === "object" && !Array.isArray(value)
          ? { ...deepClone(value) }
          : typeof value === "object" && !Array.isArray(value)
          ? [...value]
          : [value],
    };
  }
  return tempObj;
};

// Deepseal
const deepSeal = (obj) => {
  Object.values(obj).forEach((ele) => {
    typeof ele === "object" && deepSeal(ele);
  });
  return !Object.isSealed(obj) && Object.seal(obj);
};
