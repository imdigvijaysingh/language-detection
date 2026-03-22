# Language Detection Web Application 🌍

A modern web application built with Next.js and Python (FastAPI) that detects the language of any typed text instantly using a Machine Learning model (Multinomial Naive Bayes).

## 🚀 Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** FastAPI (Python), Uvicorn
- **Machine Learning:** Scikit-learn, Pandas, NumPy

## 💻 How to Run Locally

You can easily run this project locally by starting the backend and frontend servers. 

### Prerequisites
Make sure you have Node.js and Python installed on your machine.
```bash
npm install
python -m pip install -r requirements.txt
```

### Starting the Servers

Because we configured a unified dev script, you can spin up both the Next.js frontend and the Python backend with a single command!

Simply open your terminal in the project folder and run:
`npm run dev`

*(This uses the `concurrently` package to simultaneously run `npm run dev:frontend` and `npm run dev:backend`)*

Now, open [http://localhost:3000](http://localhost:3000) in your browser. Whenever you type text, it will be accurately routed to the Python ML backend to instantly detect the language!

## 💡 How It Works

1. **Input**: You type or paste some text.
2. **Analysis**: The Next.js frontend sends the text to the local Python FastAPI endpoint.
3. **Detection**: Our `scikit-learn` Naive Bayes model processes the text's patterns and calculates probabilities.
4. **Confidence**: You receive the identified language along with a confidence percentage detailing how sure the model is.

---
Made with ❤️ by [Digvijay](https://github.com/imdigvijaysingh)