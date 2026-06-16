/* style.css */
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;   /* full viewport height */
  margin: 0;
}

table {
  margin: auto; /* centers the main table */
  border-collapse: collapse;
}

table th, table td {
  padding: 10px;
  border: 1px solid black;
}

/* Optional: make nested tables centered inside their parent cells */
td > table {
  margin: auto;
}
