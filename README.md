            #Time Tracking Dashboard
Responsive dashboard for displaying time tracking statistics across
different activities with the ability to switch between Daily/Weekly/Monthly views.
The project is built using HTML,CSS(Grid+Flexbox), and JavaScript(fetch + DOM).

                                #Technologies
 -HTML5
 -CSS3(Mobile First, Grid, Flexbox)
 -JavaScript(ES6)
 -JSON(data)

                                 ##The structure of the project
- `index.html` - main page
- `style.css` - styles
- `script.js` - logic
- `data.json` - data for cards
- `images/` - image
- icon-work.svg
- icon-play.svg
- icon-study.svg
- icon-exercial.svg
- icon-social.svg
- icon-selfcare

-                            ##How it works
1.Data is loaded from data.json via fetch.
2. Js dynamically creates a card
3.The Daily/Weekly/Monthly buttons change the period
4.For each card:
- time is shown(current)
- previous time
- corresponding caption:
Daily ->Yesterday
Weekly -> Last Week
Monthly -> Last Month

                           ##Basic Js logic
  fetch("data.json)
  .then(res => res.json())
  .then(data => {
  createCards(data);
  updateCards(data,currentPeriod);
  });
  createCards() -creates HTML cards.
  updateCards() - updates figures when the period changes.

                      ##Design features
  Mobile First - mobile version first.
  The desktop appears through media query.
  @media(min-width: 1024px){
  .container {
		display: grid;
		grid-template-columns: 220px 1fr;
		gap: 1.5rem;
		align-items: stretch;
}
}
The colored stripes are implemented through .card-bar.
The icons are located inside the bars.

      #The project works at the link
   **https://tetiana1990.github.io/Time-tracking-dashboard/**
                                 
