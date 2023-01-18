//-------------------------------------------------------------------------------------------------
// CSS INLINE STYLING USING TAILWIND

const footer_background =
  "p-2 bg-zinc-300  shadow md:flex md:items-center md:justify-between md:p-2 dark:bg-zinc-900";
const footer_text =
  "text-sm text-right text-gray-400 sm:text-center dark:text-gray-400";
const footer_hover = "hover:text-bl-200 hover:underline";
const background = "bg-zinc-800 p-2 ";

//-------------------------------------------------------------------------------------------------

function Footers() {
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <>
      <div className={background}>
        <footer class={footer_background}>
          <button type="button" class="btn btn-info">
            <a
              className="text-xs drop-shadow-xl hover:text-white"
              onClick={topFunction}
            >
              ⬆️
            </a>
          </button>
          <p></p>
          <span class={footer_text}>
            All Rights Reserved | Created by Adi Bhan with ❤️ from GitHub ➡️{" "}
            <a href="https://github.com/AdiBhan/Portfolio" class={footer_hover}>
              Click to view source
            </a>
            .
          </span>
        </footer>{" "}
      </div>
    </>
  );
}
export default Footers;
