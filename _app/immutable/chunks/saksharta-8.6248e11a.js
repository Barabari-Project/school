const e=`<section data-auto-animate>
<h2 class="fw7 p10">Understanding Basics of Web Dev</h2>
<p class="p10">
  Over the next hour we will be making this fanpage for Virat Kohli
  using some basic programming concepts. We'll primarily use HTML and CSS
</p>
<img height="400px" src="https://i.imgur.com/5HMzk3U.png" alt="virat kohli preview" />
</section>
<!-- SLIDE 2 -->
<section data-auto-animate show code="<html>
<body>
  <h1>Virat Kohli</h1>
</body>
</html>">
<div class="f j-ar">
  <div class="w-33 p-abs tl" style="left:-7%;">
    <p class="p10">
      <b><code>&lt;html&gt;</code></b>: This represents the root of the webpage. "If present" it tells
      the computer that everything inside this tag is a webpage
    </p>
    <br />
    <p class="p10">
      <b><code>&lt;body&gt;</code></b>: This represents the main content. While there can be multiple
      main contents, it's best to have only one
    </p>
    <br />
    <p class="p10">
      <b><code>&lt;h1&gt;</code></b>: This is the biggest heading on the webpage. It tells us the main
      title, which is "Virat Kohli"
    </p>
  </div>
</div>
</section>
<!-- SLIDE 3 -->
<section data-auto-animate show code="<html>
<body>
  <h1>Virat Kohli</h1>
  <h2>About Virat Kohli</h2>
  <p>
    Virat Kohli is an Indian cricketer and one of the best batsmen in the world. He was born on November 5, 1988, in Delhi, India.
    Kohli made his international debut in 2008 and has since achieved numerous records and accolades in his cricket career.
    He is known for his aggressive batting style and exceptional batting average. Kohli has led the Indian cricket team as captain
    and has been a key player in many successful campaigns.
  </p>
</body>
</html>">
<div class="f j-ar">
  <div class="w-33 p-abs tl" style="left:-7%;">
    <p class="p10">
      <b><code>&lt;h2&gt;</code></b>: These are like smaller headings that tell us different sections of the
      webpage. For example, "About Virat Kohli", "Career Achievements", and "Personal Life" are different sections
    </p>
    <br />
    <p class="p10">
      <b><code>&lt;p&gt;</code></b>: These are paragraphs of text that tell us information about Virat Kohli
    </p>
  </div>
</div>
</section>
<!-- SLIDE 4 -->
<section data-auto-animate show code="<html>
<body>
  <h2>Career Achievements</h2>
  <ul>
    <li>Fastest player to reach 8,000, 9,000, 10,000, and 11,000 runs in One Day Internationals (ODIs).</li>
    <li>Holds the record for the most double centuries as a captain in Test cricket.</li>
    <li>Recipient of several prestigious awards, including the Sir Garfield Sobers Trophy for ICC Cricketer of the Year.</li>
  </ul>
</body>
</html>">
<div class="f j-ar">
  <div class="w-33 p-abs tl" style="left:-7%;">
    <p class="p10">
      <b><code>&lt;ul&gt;</code></b>: This is a list of items in which order doesn't matter. For example,
      here we've listed some of Virat Kohli's achievements
    </p>
    <br />
    <p class="p10">
      <b><code>&lt;li&gt;</code></b>: These are the individual items in <i>any</i> list (ordered or unordered)
      which may text, images or even other lists
    </p>
  </div>
</div>
</section>
<!-- SLIDE 5 -->
<section data-auto-animate show code="<html>
<body>
  <h1>Virat Kohli</h1>
  <h2>About Virat Kohli</h2>
  <p>
    Virat Kohli is an Indian cricketer and one of the best batsmen in the world. He was born on November 5, 1988, in Delhi, India.
    Kohli made his international debut in 2008 and has since achieved numerous records and accolades in his cricket career.
    He is known for his aggressive batting style and exceptional batting average. Kohli has led the Indian cricket team as captain
    and has been a key player in many successful campaigns.
  </p>
  <h2>Career Achievements</h2>
  <ul>
    <li>Fastest player to reach 8,000, 9,000, 10,000, and 11,000 runs in One Day Internationals (ODIs).</li>
    <li>Holds the record for the most double centuries as a captain in Test cricket.</li>
    <li>Recipient of several prestigious awards, including the Sir Garfield Sobers Trophy for ICC Cricketer of the Year.</li>
  </ul>
</body>
</html>">
<div class="f j-ar">
  <div class="w-33 p-abs tl" style="left:-7%;">
    Let's bring this all together! We can put all the code we've learned so far into one webpage
  </div>
</div>
</section>
<!-- SLIDE 6 -->
<section data-auto-animate show>
Slide 3
</section>
<!-- SLIDE 7 -->
<section data-auto-animate show>
<div class="f j-ar">
  <div class="w-33 p-abs tl" style="left:-7%;">
    Let's now add some styling to this
  </div>
</div>
</section>
<!-- SLIDE 8 -->
<section data-auto-animate show code="<html>
<style>
body {
  font-family: 'Brush Script MT (cursive)';
}
h1 {
  font-family: Arial, 'Brush Script MT (cursive)';
  background-color: black;
  color: white;
  text-align: center;
}
</style>
<body>
  <h1>Virat Kohli</h1>
  <h2>About Virat Kohli</h2>
  <p>
    Virat Kohli is an Indian cricketer and one of the best batsmen in the world. He was born on November 5, 1988, in Delhi, India.
    Kohli made his international debut in 2008 and has since achieved numerous records and accolades in his cricket career.
    He is known for his aggressive batting style and exceptional batting average. Kohli has led the Indian cricket team as captain
    and has been a key player in many successful campaigns.
  </p>
  <h2>Career Achievements</h2>
  <ul>
    <li>Fastest player to reach 8,000, 9,000, 10,000, and 11,000 runs in One Day Internationals (ODIs).</li>
    <li>Holds the record for the most double centuries as a captain in Test cricket.</li>
    <li>Recipient of several prestigious awards, including the Sir Garfield Sobers Trophy for ICC Cricketer of the Year.</li>
  </ul>
</body>
</html>">
<div class="f j-ar">
  <div class="w-33 p-abs tl" style="left:-7%;">
    <p class="p10">
      <b><code>&lt;style&gt;</code></b>: This is where we can add some styling to our webpage. We can change the
      fonts, colours, layout etc of our webpage.
    </p>
    <br />
    <p class="p10">
      <b><code>h1 {}</code></b>: This part is about styling a specific type of heading, the <i>h1</i> heading.
      Where the <b>{}</b> contain all the rules h1 will follow
    </p>
    <br />
    <p class="p10">
      <b><code>background-color:black</code></b>: Changes the background colour of the h1 heading to black since
      it's inside the h1's <b>{}</b>
    </p>
    <br />
    <p class="p10">
      <b><code>color:white</code></b>: Same as background we set the TEXT colour to white
    </p>
  </div>
</div>
</section>
<!-- SLIDE 9 -->
<section data-auto-animate show>
<div class="f j-ar">
  <div class="w-33 p-abs tl" style="left:-7%;">
    <p class="p10 tl" style="border: 1px solid #000;">
      <b><code>text-align: left</code></b>: Aligns text ALLLLLL the way to the left
    </p>
    <br />
    <p class="p10 tc" style="border: 1px solid #000;">
      <b><code>text-align: center</code></b>: Aligns text to the center <b>&rarr;</b>
    </p>
    <br />
    <p class="p10 tr" style="border: 1px solid #000;">
      <b><code>text-align: right</code></b>: Aligns text to the right (where Americans drive)
    </p>
  </div>
</div>
</section>
<!-- SLIDE 10 -->
<section data-auto-animate show>
<div class="f j-ar">
  <div class="w-33 p-abs tl" style="left:-7%;">
    <p class="p10 tl" style="font-family: Times;font-size:1.1em;">
      <b><code>font-family: Times</code></b>: Change what the font looks like for fancier styles
    </p>
    <br />
    <p class="p10 tl" style="font-family: 'Brush Script MT (cursive)';">
      <b><code>font-family: 'Brush Script MT (cursive)'</code></b>: If the font name has spaces in it, then you
      need to put it in quotes
    </p>
    <br />
    <p class="p10 tl" style="font-family: Arial;">
      <b><code>font-family: Roboto, Arial</code></b>: Checks if you have Roboto installed, if not then it uses
      Arial
    </p>
  </div>
</div>
</section>`;export{e as default};
