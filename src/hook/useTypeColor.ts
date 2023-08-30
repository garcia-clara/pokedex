export const useTypeColor = (type: string) => {
   switch (type) {
      case "fire":
         return "red";
      case "water":
         return "blue";
      case "ice":
         return "teal";
      case "grass":
         return "green";
      case "bug":
         return "green";
      case "flying":
      case "normal":
      case "steel":
         return "grey";
      case "electric":
         return "yellow";
      case "dark":
      case "poison":
      case "ghost":
      case "psychic":
         return "purple";
      case "rock":
      case "fighting":
      case "ground":
         return "orange";
      case "fairy":
      case "dragon":
         return "pink";
   }
};
