Question 1: What is the purpose of creating a model with an interface and schema in MongoDB? How does it help in defining the structure of a collection?
Ans: The main purpose of creating a model with a interface and schema beacuse it provides a way to interect with the stored data in the collection.It also gives consistency and also we can valdiate our data and most important it's increase the efficiency.

Question 2: Explain the concept of field filtering in MongoDB. How can you specify which fields to include or exclude in the returned documents?
Ans:Basically field filtering is provides flexibility to get the necessary data and improve the query performance.If we have large collection in database then field filtering helps us to get the specific data.
Example:
Include :db.collection.find({}, { field1: 1, field2: 1 })
Exclude:db.collection.find({}, { field1: 0, field2: 0 })
here in find method we give field value to include that these filed can be shown other hand when we put the value it won't be shown.

Question 3: What are instance methods in MongoDB models? Provide an example of a custom instance method and explain its purpose.
Ans: We create instance from a class, if we create a class and we add a method with instance(class->instance+method).Instance methods are methods that perform some action on a specific instance of a Model rather than the entire Model itself.
Example:
import { Schema, model, Model } from 'mongoose';

interface IUser {
  firstName: string;
  lastName: string;
}

// Put all user instance methods in this interface:
interface IUserMethods {
  fullName(): string;
}

const userSchema = new Schema<IUser, Model<IUser>, IUserMethods>({
  firstName: String,
  lastName: String,
});

userSchema.methods.fullName = function (): string {
  return `${this.firstName} ${this.lastName}`;
};

const User = model<IUser, Model<IUser, IUserMethods>>('User', userSchema);


const user: IUser = new User({
  firstName: 'John',
  lastName: 'Doe',
});

const fullName: string = user.fullName();
console.log(fullName); // Output: "John Doe"

Now it is more convinient to retrive the full name it's enhance code reusibility

Question 4: How do you use comparison operators like "$ne," "$gt," "$lt," "$gte," and "$lte" in MongoDB queries? Provide examples to illustrate their usage.
Ans:"$ne," "$gt," "$lt," "$gte," and "$lte" this operator used for perform a conditional queries and compare between the fields.This operator retrive the documnet which is satisfy the condition only.
Example:
db.users.find({ name: { $ne: "John" } });
db.orders.find({ totalAmmount: { $gt: 100 } });
db.products.find({ price: { $lt: 50 } });
db.documents.find({ quantity: { $gte: 10 } });
db.documents.find({ quantity: { $gte: 10 } });


Question 5: What are MongoDB’s “$in” and “$nin” operators? How can you use them to match values against an array of values or exclude values from a given array?
Ans:the "$in" and "$nin" operators are used to match values against an array of values or exclude values from a given array, respectively. 
Example:
$in operator check if the value of the field of array matches or not if match then it returna the specified field valu
db.users.find({ role: { $in: ["user", "admin"] } });

$nin operator matches docs where the values of field not match any specified arra value.
db.products.find({ category: { $nin: ["electronics", "clothing"] } });
