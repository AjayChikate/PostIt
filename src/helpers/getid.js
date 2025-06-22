import jwt from "jsonwebtoken"


export const getID = (request) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    return decoded.id;
    
  } catch (err) {
    console.log(err.message)
    return -1
  }
}


