export const Skill = ({ skill }) => {
    function hashCode(str) {
        let hash = 0;
        if (str.length === 0) return hash;
      
        for (let i = 0; i < str.length; i++) {
          const char = str.charCodeAt(i);
          hash = ((hash << 5) - hash) + char;
          hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }

    const skillHash = Math.abs(hashCode(skill)) % 7; // Calculate Hash

    const colors = {
        0: { backgroundColor: "#4E4B5D", textColor: "#C695AB" }, //pink
        1: { backgroundColor: "#384C5A", textColor: "#7DDED3" }, //turquoise
        2: { backgroundColor: "#4F4B59", textColor: "#FEB2B2" }, //red
        3: { backgroundColor: "#3F5359", textColor: "#9AE6B4" }, //green
        4: { backgroundColor: "#4E5552", textColor: "#FAF089" }, //yellow
        5: { backgroundColor: "#3D4F63", textColor: "#90CDF4" }, //blue
        6: { backgroundColor: "#4A5363", textColor: "#BAC1CB"} //grey
    };

    const styles = colors[skillHash]; // Get the color object for the hash

    const divStyles = {
        backgroundColor: styles.backgroundColor,
        color: styles.textColor,
        padding: "0.5rem 1rem",
        fontWeight: "bold",
        fontSize: "0.85rem", // Adjust font size
        display: "inline-block", // Align inline
        textAlign: "center",
    }

    return (
        <div style={divStyles}>
            {skill}
        </div>
    );
};



