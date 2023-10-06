# PC Forge

PC Forge is a web-based PC builder platform that allows users to customize and build their own PC based on their personal preferences. Users can select components such as motherboard, CPU, RAM, storage, power supply unit, and monitor, and view the total cost of their customized PC. They can also make a purchase directly through the website.

## Live Demo

Check out the live demo of PC Forge [here](https://pc-builder-frontend-omega.vercel.app/)
Live Code Link : [here](https://github.com/SanyFaysal/pc-builder-frontend)

## Features

- **User Authentication**: Users can create accounts and log in to access the PC builder feature.
- **PC Builder**: Users can select components for their PC build, including motherboard, CPU, RAM, storage, power supply unit, and monitor. They can view the total cost of their selected components.
- **Product Showcase**: The home page features a navigation bar, a banner, and six random products displayed for users to explore.
- **Product Categories**: Users can explore products through six different categories, allowing for easy navigation and product discovery.
- **Profile Page**: Registered users have access to a profile page where they can view their personal information and account details.

## Getting Started

To get started with PC Forge, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/pc-forge.git`
2. Navigate to the project directory: `cd pc-forge`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

Make sure you have Node.js and npm installed on your system.

## Technologies Used

- **Frontend**: Tailwind CSS, Next.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: NextAuth

## Project Structure

- **Server-Side Rendering (SSR)**: The PC builder page is implemented using SSR, ensuring a fast and efficient rendering process on the server-side. SSR enhances the user experience by providing quicker initial loading times.
- **Static Site Generation (SSG)**: The categories and product details pages are generated using SSG. SSG pre-builds these pages at build time, ensuring optimal performance and minimal server load when users access these static content pages.
