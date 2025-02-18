# Miami Car House

A modern marketing website for a company that offers anti-corrosion coating for cars

![Project thumbnail](https://github.com/donatasandros/mch/blob/main/public/og.jpg)

## Features

- ⚡ Fast and lightweight.
- 🎨 Clean and modern UI.
- 📱 Responsive design across devices.
- 🔒 Authentication.
- 📷 Image uploads with [UploadThing](https://uploadthing.com).
- 🗄️ [Neon serverless postgres](https://neon.tech/home).

## Getting Started

### 1️⃣ Clone the repository

```sh
git clone https://github.com/donatasandros/mch.git
```

### 2️⃣ Install dependencies

```sh
npm install
```

### 3️⃣ Set up environment variables

Create a .env file and add your API keys:

```sh
POSTGRES_URL=
POSTGRES_URL_NON_POOLING=
POSTGRES_USER=
POSTGRES_HOST=
POSTGRES_PASSWORD=
POSTGRES_DATABASE=
POSTGRES_URL_NO_SSL=
POSTGRES_PRISMA_URL=
AUTH_SECRET=
UPLOADTHING_TOKEN=
```

### 4️⃣ Run the development server

```sh
npm run dev
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
