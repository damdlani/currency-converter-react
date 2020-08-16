import React from 'react';
import Container from './Container';



function App() {
  return (
    <Container>
      <main className="main">
        <form className="form">
              <h1 className="form__title">Przelicznik walut</h1>
                  <label className="form__label"><span className="form__span">Kwota w zł:</span>
                      <input type="number" step="0.01" required min="0.01" className="form__input"/>
                  </label>
                  <label className="form__label"><span className="form__span">Waluta:</span>
                      <select name="currencies" id="currency-select" className="form__currencies">
                        <option className="form__currency" value="">Rozwiń, aby wybrać walutę</option>
                        <option className="form__currency" value="EUR">Euro</option>
                        <option className="form__currency" value="USD">Dolar amerykański</option>
                        <option className="form__currency" value="GBP">Funt szterling</option>
                        <option className="form__currency" value="CHf">Frank szwajcarski</option>
                      </select>
                  </label>    
          <button className="form__button">Przelicz</button>
        </form>
      </main>
      <footer className="footer">&copy;Krzysztof Kwieciński 2020</footer>
    </Container>
  );
}

export default App;
