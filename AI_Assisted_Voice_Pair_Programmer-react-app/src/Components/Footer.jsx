import React from "react";

function Footer() {
  return (
    <footer id="footer" class="footer">
      <div class="footer-container">
        <div class="floating-container">
          <p class="list-items">
            <strong>Developed and deployed by</strong>
          </p>
          <p class="list-items">Murugappan M M - 20BEC066</p>
          <p class="list-items">Saamsundar K V - 20BEC084</p>
          <p class="list-items">Premgugan P - 21BEC324</p>
        </div>

        <div class="floating-container">
          <p class="list-items">
            <strong>Guided by</strong>
          </p>
          <p class="list-items">
            M Nithyakumar M.E., <br />
            Assistant professor - ECE
          </p>
        </div>
      </div>
      <div>
        <center
          style={{
            color: "white",
            fontFamily: "Montserrat",
            fontWeight: 100,
          }}
        >
          Copyrights &copy; reserved for 2024
        </center>
      </div>
    </footer>
  );
}

export default Footer;
