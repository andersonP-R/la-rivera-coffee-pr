// NAV BAR ANIMATION
export default function () {
    window.addEventListener('scroll', function () {
        let header = this.document.querySelector("#header");
        header.classList.toggle("down", this.window.scrollY > 0);
    });

    // NEW FOOTER ANIMATION
    window.addEventListener('scroll', function () {
        let footer = this.document.querySelector("#new_footer");
        footer.classList.toggle("downFooter", this.window.scrollY > 0);
    });

}