
# SHARE PROMPT

This is a web application that allows users to share AI prompts with each other, thereby helping and enhancing their knowledge and creativity. The application uses Next.js for both the back end and the front end, MongoDB for the database. 

## Features

🚀 **Learn and share AI prompts:** allows users to discover other people's posts and can share their knowledge with the community ...

🚀  **Edit and Delete Created Prompts:**  Users can edit and delete their posts at any time

🚀 **View Other People's Profiles:** If a user is interested in someone's posts, they can take a look at their profile to see what they've posted
  
🚀 **Copy to Clipboard:** Implement a convenient "Copy to Clipboard" functionality for users to easily copy the AI prompts for their use.

🚀 **Search Prompts:** Allow users to search for the prompts they want through content, tags or the author's name ...

🚀 **Google Authentication:** Apps that allow sign-in with Google through NextAuth
 



## Installation

 Requirements

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)


**1. Clone the repository:**
```bash
git clone https://github.com/tung-doan/promptopia.git
cd promptopia
```

**2. Install dependencies for the webweb:**
```bash
npm install
```
## Setting Up Environment Variables

After cloning the project, you need to create a `.env` file and provide the necessary environment variables like this.

```bash
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=
GOOGLE_ID=
GOOGLE_CLIENT_SECRET=
MONGODB_URI=
```
Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on these corresponding websites from [Google Cloud Console](https://console.cloud.google.com/welcome?rapt=AEjHL4MBaLLneW6OfAHf_zgms1eWZFw1wdy0_KIC4uh1nEqh2m4ojOvrXNlzJ4h7CZTkpiWgcsoHbUvS-FMdCP7WIkaVlPAeU7cnVR6Y0wJHeLMOtU6KAzA&project=promptopia-385410), [Cryptpool](https://www.cryptool.org/en/cto/openssl/) (for random Auth Secret), and [MongoDB](https://www.mongodb.com/).

    
## Contact Information

- Facebook: https://www.facebook.com/tung.doan.92775838/ 
- Git: https://github.com/tung-doan
- Gmail: tung200456789@gmail.com
- Twitter: https://x.com/Tung__SG
- Instagram: https://www.instagram.com/tung200489/
