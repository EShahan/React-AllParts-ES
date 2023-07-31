export default function BookList() {
   let pageTitle = "shrug";
   let book1 = "https://upload.wikimedia.org/wikipedia/commons/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg";
   let book2 = "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Prayer_for_the_dying_poster.jpg/220px-Prayer_for_the_dying_poster.jpg";
   let book3 = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/220px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="They made me read this back in highschool. It's by J.D. Salinger. Can't remember what it's about." />
         <img src={book2} alt="I read this in college." />
         <img src={book3} alt="I was made to read this in highschool, too. By Harper Lee. It was supposed to be the only book she ever published." />
      </div>      
   );
}