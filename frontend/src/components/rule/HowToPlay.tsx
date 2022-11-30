const HowToPlay = () => {
  return (
    <>
      <h2>How to play Eurojackpot</h2>

      <ul
        style={{ fontSize: "0.8rem", marginTop: "1rem", marginLeft: "1.5rem" }}
      >
        <li style={{ marginBottom: "0.5rem" }}>
          Player must select five main numbers from 1 to 50 and then two
          additional star numbers from 1 to 12.
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          Or player can use the "Quick Pick" option when buying tickets to
          randomly generate a set of numbers.
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          Player has to purchase the ticket before the cut-off time in the
          participating country.
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          There are 12 prize tiers on offer in Eurojackpot which starts at €10
          million.
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          If you have guessed all 7 numbers correctly, the jackpot has been hit.
          If you have two correct numbers and a euro number, you end up in the
          lowest prize bracket.
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          If nobody matches all of the numbers in a draw, the jackpot will roll
          over into the next draw, until it reaches its cap of €120 million.
        </li>
      </ul>
    </>
  );
};

export default HowToPlay;
