const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");
// const { find } = require("./models/Recipe.model");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";


connectDB()
handler()

async function connectDB () {
try {
  mongoose.connect(MONGODB_URI);
}
catch(error) {
  console.log("Something went wrong", error)
}
}
async function handler () {
    await Recipe.deleteMany()
    console.log("Connected to the database")
    const CeasarDressing = {
      title: "Ceasar Dressing",
      level: "Easy Peasy",
      ingredients: [
        "garlic",
        "lemon juice",
        "worcestershire sauce",
        "mayonaise",
        "water",
        "white wine vinegar",
        "salt",
      ],
      duration: 10,
      creator: "Dean",
    };
    await Recipe.create(CeasarDressing).then(()=>{ console.log("Recipe Added:", CeasarDressing.title)});
    await Recipe.insertMany(data).then(()=>{
      for (let i = 0; i < data.length; i++) {
        console.log("Recipe Added:", data[i].title)
      }
    });
    await Recipe.findOneAndUpdate(
      {title: 'Rigatoni alla Genovese'}, 
      {duration: 100}, 
      {new: true})
        .then(()=>{console.log("Updating Successful")})
    await Recipe.deleteOne({title: "Carrot Cake"}).then(()=>{console.log("Deleting Successful")})
    mongoose.disconnect();
}



//so much things here not working but why i dont know??
// Connection to the database "recipe-app"
// mongoose
//   .connect(MONGODB_URI)
//   .then((x) => {
//     console.log(`Connected to the database: "${x.connection.name}"`);
//     // Before adding any recipes to the database, let's remove all existing ones
//     return Recipe.deleteMany();
//   })
//   .then(() => {
//     // Run your code here, after you have insured that the connection was made
//     // recipe();
//     // manyRecipes();
//     // updateRigatoni();
//     // // findTitle()
//     // deleteCarrotCake();
//     // return mongoose.connection.close()
//   })
//   .catch((error) => {
//     console.error("Error connecting to the database", error);
//   });

// const CeasarDressing = {
//   title: "Ceasar Dressing",
//   level: "Easy Peasy",
//   ingredients: [
//     "garlic",
//     "lemon juice",
//     "worcestershire sauce",
//     "mayonaise",
//     "water",
//     "white wine vinegar",
//     "salt",
//   ],
//   duration: 10,
//   creator: "Dean",
// };

// async function recipe() {
//   try {
//     await Recipe.create(CeasarDressing);
//     console.log("Im a bitch");
//     // return createRecipe;
//   } catch (error) {
//     console.log(error);
//   }
// }

// const manyRecipes = async () => {
//   try {
//     await Recipe.insertMany(data).then((allrecipes) => {
//       for (let i = 0; i < allrecipes.length; i++) {
        
//         console.log(allrecipes[i].title);
//       }
//     });
//     // return createRecipeArr;
    
//   } catch (error) {
//     console.log(error);
//   }
// };

// //no idea??
// // const findTitle = async () => {
// //   try {
// //     await Recipe.find().then((allrecipes) => {
// //       for (let i = 0; i < allrecipes.length; i++) {
        
// //         console.log(allrecipes[i].title);
// //       }
// //     });
// //   } catch (error) {
// //     console.log(error);
// //   }
// // };

// // Recipe.find()
// //   .then((allrecipes) => {
// //     for (let i = 0; i < allrecipes.length; i++) {
// //       console.log(allrecipes[i].title);
// //     }
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   });

// async function updateRigatoni() {
//   try {
//     await Recipe.findOneAndUpdate(
//       { title: "Rigatoni alla Genovese" },
//       { duration: 100 },
//       { new: true }
//     );
//     console.log("Nice it was a succes!");
//     // return findPasta;
//   } catch (error) {
//     console.log(error);
//   }
// }

// const deleteCarrotCake = async () => {
//   try {
//     const deleteCake = await Recipe.deleteOne({ title: "Carrot Cake" });
//     console.log("You deleted the Carrot Cake");
//     return deleteCake;
//   } catch (error) {
//     console.log(error);
//   }
// };



