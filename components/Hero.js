import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Konsort-ff Presale is Live!</h1>
        <p>Join our token presale and be part of the future consortium.</p>
        <div className={styles.presaleWidget}>
          <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="amount">Amount to Buy</label>
            <input type="number" id="amount" placeholder="Enter amount" min="0" step="any" />
            <button type="button" className={styles.connectBtn}>Connect Wallet</button>
            <button type="submit" className={styles.buyBtn}>Buy Tokens</button>
            <div className={styles.status}>
              <span>Presale: Active</span> | <span>Price: 0.01 ETH/token</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
