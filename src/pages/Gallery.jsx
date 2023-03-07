import React from "react";

class Gallery extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log(23);
    // document.addEventListener("DOMContentLoaded", function(){
    (function () {
      function calculateImageTranslate(galleries) {
        galleries.forEach(async (gallery) => {
          const galleryTop = gallery.offsetTop,
            images = gallery.querySelectorAll("div");

          // adding calculating image transitions
          await new Promise((res, rej) => {
            images.forEach((img) => {
              // calculating image left

              const imgX =
                img.parentElement.parentElement.offsetLeft + img.offsetLeft; // offsetLeft of img = offset of parent + offset of img

              img.style.setProperty(
                "--img-left",
                "calc(" +
                  (window.innerWidth * 0.3 +
                    Math.random() * window.innerWidth * 0.4) +
                  "px - " +
                  img.offsetLeft +
                  "px - " +
                  img.offsetWidth / 2 +
                  "px)"
                /* X translate */
                /* random between 30 to 70vw - img left - 50% of width */
              );

              // calculating image top
              img.style.setProperty(
                "--img-top",
                gallery.offsetTop -
                  img.offsetTop -
                  img.offsetHeight / (2.75 + Math.random() * 2) +
                  "px"
                /* Y translate */
                /* top of tha gallery div - img top offset - random part of image height */
              );
            });

            res();
          });

          // adding activate class to gallery, so transitions property is added
          gallery.classList.add("activate");
        });
      }

      const galleries = document.querySelectorAll(".img-gallery .gallery");

      calculateImageTranslate(galleries);

      // auto adjust images on window resize
      window.addEventListener("resize", function () {
        calculateImageTranslate(galleries);
      });

      // adding scroll feature in gallery
      window.addEventListener("scroll", function (e) {
        galleries.forEach((gallery) => {
          gallery.querySelectorAll("div").forEach((img) => {
            if (
              gallery.offsetTop <=
              window.scrollY + (window.innerHeight * 6) / 10
            ) {
              img.style.setProperty("transform", "translate(0,0)");
            } else {
              img.style.setProperty("transform", "var(--transform)");
            }
          });
        });
      });

      // creating image slide
      const slider = document.querySelector("#slider");
      var lastOpenedGallery = null;

      galleries.forEach((gallery) => {
        // converting all divs of gallery to array
        const galleryImg = Array.prototype.slice.call(gallery.children);

        gallery.addEventListener("click", function (e) {
          if (!e.target.matches("img")) return;

          // pushing one slider request to history, to detect back in browser
          window.history.pushState("openingSlider", "sliderIsOpened");

          // updating last opened gallery to this gallery
          lastOpenedGallery = gallery;

          // updating slider
          slider.querySelector("img").src = e.target.src;
          slider.classList.add("active");

          // counting the index of img
          slider.querySelector("img").dataset.imgIndex = galleryImg.indexOf(
            e.target.parentNode
          );

          // updating slider controls
          const evt = new Event("updatecontrols");
          evt.gallery = gallery;
          slider.dispatchEvent(evt);
        });
      });

      // slider click feature like prev, next, and closing
      slider.addEventListener("click", function (e) {
        if (!e.target.matches(".image *")) {
          slider.classList.remove("active");
          lastOpenedGallery = null;
          return;
        } else if (e.target.matches(".prev:not(.disabled)")) {
          slider.querySelector("img").dataset.imgIndex--;
        } else if (e.target.matches(".next:not(.disabled)")) {
          slider.querySelector("img").dataset.imgIndex++;
        }

        if (lastOpenedGallery == null) return;

        const img =
          lastOpenedGallery.querySelectorAll("img")[
            slider.querySelector("img").dataset.imgIndex
          ];
        slider.querySelector("img").src = img.src;

        const evt = new Event("updatecontrols");
        evt.gallery = lastOpenedGallery;

        slider.dispatchEvent(evt);
      });

      // updating controls working
      slider.addEventListener("updatecontrols", function (e) {
        // when image content updated
        if (slider.querySelector("img").dataset.imgIndex == 0) {
          // no previous image available, disabling the button
          slider.querySelector(".prev").classList.add("disabled");
        } else {
          // previous image available enabling btn
          slider.querySelector(".prev").classList.remove("disabled");
        }

        if (
          e.gallery.children.length - 1 ==
          slider.querySelector("img").dataset.imgIndex
        ) {
          // no next image available, disabling the button
          slider.querySelector(".next").classList.add("disabled");
        } else {
          // previous image available enabling btn
          slider.querySelector(".next").classList.remove("disabled");
        }
      });

      // detecting pop state
      window.addEventListener("popstate", (e) => {
        if (slider.classList.contains("active")) {
          slider.click();
          return;
        }
      });
    })();
    // });
  }

  render() {
    return (
      <>
        <section className="img-gallery">
          <h2>Images</h2>

          <div className="gallery">
            <div className="tall">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception-4.0%2FDSC_0010-min.JPG?alt=media&amp;token=ce2cf711-c24a-4111-8ca9-718672bad62c"
                alt=""
              />
            </div>

            <div className="">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception-4.0%2FDSC_0347-min.JPG?alt=media&amp;token=e55d6578-0caf-4efc-8bee-d13cdae38385"
                alt=""
              />
            </div>

            <div className="wide">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception-4.0%2FDSC_0551-min.JPG?alt=media&amp;token=bdf95305-a67f-4b08-aba9-88835dcf41d9"
                alt=""
              />
            </div>

            <div className="wide">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception-4.0%2FDSC_0674-min.JPG?alt=media&amp;token=a0e128c9-5499-4c75-b99d-f365a7fdba93"
                alt=""
              />
            </div>

            <div className="wide">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception-4.0%2FDSC_0682-min.JPG?alt=media&amp;token=18e4d362-f742-4548-933b-a7fff8b5f003"
                alt=""
              />
            </div>

            <div className="">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception-4.0%2FDSC_0720-min.JPG?alt=media&amp;token=f3420096-1128-489d-8709-cab12f4442e7"
                alt=""
              />
            </div>

            <div className="wide">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception-4.0%2FDSC_0729-min.JPG?alt=media&amp;token=2bd6c7f5-92ea-4da4-8d3c-5dd7e827d444"
                alt=""
              />
            </div>

            <div className="tall">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception-4.0%2FDSC_0741-min%20(1)-min.JPG?alt=media&amp;token=4dafc290-8ed2-4c5d-a08a-cbced87eb5e8"
                alt=""
              />
            </div>

            <div className="">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception-4.0%2FDSC_0999-min-min.JPG?alt=media&amp;token=97b557dc-491f-4cba-85c0-dd3df0eb340d"
                alt=""
              />
            </div>

            <div className="">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception-4.0%2FDSC_1000-min.JPG?alt=media&amp;token=81359407-88a7-45cb-a7e8-152511911704"
                alt=""
              />
            </div>

            <div className="wide">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception-4.0%2FIMG_7323-min.JPG?alt=media&amp;token=ba5f85c2-dadc-44df-a5fe-1a29bbfc2f3a"
                alt=""
              />
            </div>

            <div className="">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception-4.0%2FIMG_7393-min.JPG?alt=media&amp;token=7518d4b0-530e-4f0b-a8f9-8f0da63111c9"
                alt=""
              />
            </div>

            <div className="">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception-4.0%2FIMG_7423-min.JPG?alt=media&amp;token=4b3923ef-ca77-4cce-8fb3-4387b43e37cf"
                alt=""
              />
            </div>

            <div className="">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception-4.0%2FIMG_7944-min.JPG?alt=media&amp;token=0a0a39bb-d314-4d0e-a705-c96b99411aa2"
                alt=""
              />
            </div>

            <div className="wide">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception-4.0%2FIMG_7972-min.JPG?alt=media&amp;token=1ce1f3e4-9a48-4356-ae96-3abef2919ea0"
                alt=""
              />
            </div>

            <div className="">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception-4.0%2F_DSC0336-min.JPG?alt=media&amp;token=55855d43-afbc-4456-b4d2-248703bf4301"
                alt=""
              />
            </div>

            <div className="">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception-4.0%2F_DSC0337-min.JPG?alt=media&amp;token=730edf20-ff9f-473b-a1d6-8782d2f00f59"
                alt=""
              />
            </div>

            <div className="">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception-4.0%2F_DSC0527-min.JPG?alt=media&amp;token=1c4c8475-1cf4-4c6c-9010-485900dd97d8"
                alt=""
              />
            </div>

            <div className="">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception-4.0%2Fchat_bot1.jpg?alt=media&amp;token=680efb4c-5e60-4c89-a5ec-6286c92e2ac9"
                alt=""
              />
            </div>

            <div className="">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception-4.0%2Fchat_bot2.jpg?alt=media&amp;token=eb62240f-5da2-4c11-b2e7-884c86cdb25d"
                alt=""
              />
            </div>

            <div className="">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception-4.0%2Fchat_bot3.jpg?alt=media&amp;token=7d0aa64b-bb93-49a0-80cd-8ff8640e47aa"
                alt=""
              />
            </div>

            <div className="">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception-4.0%2Fchild_educaion.jpg?alt=media&amp;token=d06a772f-6c04-43fb-8d9c-abfdd15c6808"
                alt=""
              />
            </div>

            <div className="">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception-4.0%2Fchild_labour.jpg?alt=media&amp;token=5e681e61-1195-4d9a-9fae-b398dbba41e1"
                alt=""
              />
            </div>

            <div className="wide">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception-4.0%2Fgully_cricket.jpg?alt=media&amp;token=74211d58-4c78-41b7-ae41-46053ff934ee"
                alt=""
              />
            </div>

            <div className="">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception-4.0%2Fmagic.jpg?alt=media&amp;token=42cb86bc-76f6-426d-8fb3-d9bd48afec3d"
                alt=""
              />
            </div>

            <div className="wide">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception-4.0%2Fmagic1.jpg?alt=media&amp;token=1018d607-221d-4c1f-9ef4-96440ccad733"
                alt=""
              />
            </div>

            <div className="tall">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception-4.0%2Fmagic2-min.png?alt=media&amp;token=bb36ec04-d7da-4b1e-a66d-3bf9774e3936"
                alt=""
              />
            </div>

            <div className="">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception-4.0%2Fpubg.jpg?alt=media&amp;token=98dbc9f1-5314-475f-9245-86d066ea0dd9"
                alt=""
              />
            </div>

            <div className="">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception-4.0%2Fpubg_back.jpg?alt=media&amp;token=da4d29e5-0442-4f18-8ea6-1d859674f5b9"
                alt=""
              />
            </div>

            <div className="">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception-4.0%2Fstage.jpg?alt=media&amp;token=30b8d3dd-b10f-4ed7-a458-9f53abfabdfe"
                alt=""
              />
            </div>

            <div className="wide">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception-4.0%2Fteam.jpg?alt=media&amp;token=03705df2-c731-47ea-a332-35a73210b3f9"
                alt=""
              />
            </div>
          </div>
        </section>

        <div id="slider">
          <div className="image">
            <img src="" alt="" />
            <div className="controls">
              <div className="prev"></div>
              <div className="next"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Gallery;
