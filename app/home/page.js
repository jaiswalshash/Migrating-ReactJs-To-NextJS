import React from "react";

const Home = () => {
  // Dummy data
  const dummyData = [
    { id: 1, title: "About" },
    { id: 2, title: "Contact" },
  ];

  // CSS styles
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f2f2f2",
    },
    listItem: {
      margin: "10px",
      padding: "10px",
      backgroundColor: "#ffffff",
      borderRadius: "5px",
    },
  };

    return(
        <div style={styles.container}>
        <h1>Home</h1>
        <ul>
            {dummyData.map((item) => {
                return(
                    <li style={styles.listItem} key={item.id}>{item.title}</li>
                )
            })}
        </ul>
        </div>
    )
}

export default Home;