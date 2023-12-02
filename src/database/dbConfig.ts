import path from 'path';


let filenames = path.join(__dirname,"../database/db.sqlite")




export const dbConf = {
  sqlite: {
    client: "sqlite",
    connection: {
      filename: filenames,
    },
  },
};
