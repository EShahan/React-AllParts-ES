export default function BookList() {
   let pageTitle = "Some books people made me read";
   let book1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgs3149eRVtMOdYmYifxodpRnQMol61SDoag&usqp=CAU";
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