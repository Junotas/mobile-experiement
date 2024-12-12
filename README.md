# React-Vite-Tailwind Project with TanStack Router

Welcome to this React-Vite-Typescript-Tailwind-Mui-Material-TanStack Router and Query landing page (yes, a mouthful).

## 🚀 Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Junotas/React-Vite-TS-Tailwind-StartPage.git
   ```
2. **Remove Existing Git History**
   If you want to start with a clean Git history (recommended if you plan to push to your own repository), run:
   ```bash
   cd React-Vite-TS-Tailwind-StartPage
   rm -rf .git
   git init
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Run the Development Server**
   ```bash
   npm run dev
   ```

After completing these steps, you should see the project running on `http://localhost:5173`

## 📜 Routing with TanStack Router

The project utilizes **TanStack Router** for easy, type-safe, and file-based routing:
- Each page corresponds to a file within the `src/routes` folder, making it easy to manage and extend routes.
- Navigation between pages is defined in the root layout file, `__root.tsx`, which includes links for Home and About.
- To add new pages, simply create a new file in the `src/routes` folder, and TanStack Router will automatically pick it up as a new route.

## 📊 Data Fetching with TanStack Query

The project leverages **TanStack Query** for efficient data fetching, caching, and state management:

- **Data Caching**: Automatically caches fetched data, making future requests faster and reducing server load.
- **Type Safety**: Ensures type-safe data handling, reducing potential errors.
- **Flexible Fetching**: Allows conditional fetching, refetching, and background updates, demonstrated here with a user list that can be fetched, modified, and reset with ease.

## 🎨 Styling with Tailwind CSS

The project uses **Tailwind CSS** to create a streamlined, utility-first approach for custom styling:

- **Responsive Design**: Tailwind makes it easy to apply responsive, mobile-friendly styles directly to components.
- **Utility Classes**: Apply consistent spacing, alignment, and color styles using utility classes, reducing CSS overhead.

## 🎨 Styling with Material-UI (MUI)

The project incorporates **Material-UI (MUI)** to provide ready-made, customizable, and accessible components:

- **Theming**: Consistent primary and secondary color theming across components for a cohesive design.
- **Responsive Components**: Pre-styled components like `Button`, `TextField`, and `Typography` are used for a polished UI.

## 🎨 ESLint and Prettier

The project is configured with ESLint and Prettier for consistent code formatting and linting. To ensure these tools work seamlessly in your development environment, follow the steps below to set up your VS Code settings:

### Step 1: Install the Necessary Extensions

1. Open the Extensions view in VS Code.
2. Install the following extensions:
   - **ESLint** by Microsoft
   - **Prettier - Code Formatter** by Prettier

### Step 2: Configure VS Code Settings

To enable automatic formatting and linting on save, update your VS Code settings:

1. Open VS Code settings by pressing `Ctrl + ,` or navigating to `File` > `Preferences` > `Settings`.
2. Search for **Format On Save** and enable **Editor: Format On Save**. This will automatically format your code with Prettier each time you save.
3. Search for **Default Formatter** and set **Editor: Default Formatter** to `Prettier - Code Formatter`.

### Step 3: Verify Formatting

To confirm everything is set up correctly:

1. Open any`.tsx` file in the project.
2. Make a change and save the file.
3. You should see Prettier format the file on save, and any ESLint issues will be highlighted.

### Step 4: Additional Scripts

You can also run linting and formatting checks from the command line using the following scripts:

```bash
# Lint your code
npm run lint

# Format your code with Prettier
npm run format
```
---

This setup should ensure that ESLint and Prettier are working effectively with your VS Code environment.

### 🖥 Pages Included
---

- **Home Page (`index.tsx`)** (Welcome page more or less the read me)
- **About Page (`about.tsx`)** (Originally just to show the routing with two pages but might remove the page)
- **List Page (`list.tsx`)** (Tanstack query and custom hook exemple)


## 🔮 Future Enhancements

This project is designed to be easily extensible, so here are some ideas for future enhancements to add extra functionality and make it even more versatile:

- **🔑 Authentication**: Considering adding Firebase Auth, Auth0, or another authentication provider for user login support.
# mobile-experiement
