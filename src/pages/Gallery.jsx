import React, { useEffect } from "react";

const Gallery = () => {
  useEffect(() => {
    galleryExecute();
  }, []);

  const galleryExecute = () => {
    // gallery page code
    document.addEventListener("DOMContentLoaded", function () {
      console.log(12);
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

          // adding alternate text as image caption
          if (e.target.alt) {
            slider.querySelector("h2").innerText = e.target.alt;
            slider.querySelector("h2").classList.add("show");
          } else {
            slider.querySelector("h2").innerText = "";
            slider.querySelector("h2").classList.remove("show");
          }

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

        // adding alternate text as image caption
        if (img.alt) {
          slider.querySelector("h2").innerText = img.alt;
          slider.querySelector("h2").classList.add("show");
        } else {
          slider.querySelector("h2").innerText = "";
          slider.querySelector("h2").classList.remove("show");
        }

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
    });
  };

  return (
    <>
      <section className="img-gallery">
        <h2>
          Technical Event <span>2018</span>
        </h2>

        <div className="gallery">
          <div className="">
            <img src="https://techspodelhincr.in/wp-content/uploads/2020/01/TECHSPO-Delhi-NCR-2020.png" />
          </div>
          <div className="wide">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3-frpxMXYcBK9lgjYTv6Z_MX9i1l7mbLnMg&usqp=CAU" />
          </div>
          <div className="wide">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6RGgNspJoUrClD_Oa6-XRfGOSU-kdjLF4FA&usqp=CAU" />
          </div>
          <div className="">
            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/tech-event-motion-poster-design-template-df7a48b3f947c2311df321e776cc3269.jpg?ts=1567082232" />
          </div>
          <div className="tall wide">
            <img src="https://img.freepik.com/free-vector/elegant-event-poster-with-black-splash_1361-2193.jpg?w=2000" />
          </div>
          <div className="wide">
            <img src="https://media.istockphoto.com/id/1153350345/photo/time-to-get-growing.jpg?b=1&s=170667a&w=0&k=20&c=rvLnZBe_WBVnF0AofEP3k0__q687hnGaZWGuGaVHM28=" />
          </div>
          <div className="wide">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt36Qaed5QifqWJB98i2FNA7h-Rs1OHfXPkA&usqp=CAU" />
          </div>
          <div className="wide">
            <img src="https://media.istockphoto.com/id/1325899588/photo/global-corporation-online-videoconference-in-meeting-room-with-diverse-people-sitting-in.jpg?s=170667a&w=is&k=20&c=1GkrJlZHjYgCtOP67FyY5wkSfcYWT5pLAkEKgC0QyK8=" />
          </div>
          <div className="wide">
            <img src="https://blog.10times.com/wp-content/uploads/2022/10/event-technology-trend.jpeg" />
          </div>
          <div className="">
            <img src="https://cdn.ces.tech/ces/media/topics/cesfeaturedtopics_op2.jpg?ext=.jpg" />
          </div>
          <div className="">
            <img src="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/171601/s300_Tech.png" />
          </div>
          <div className="">
            <img src="https://img.freepik.com/free-psd/vertical-poster-template-techno-store_23-2148979533.jpg?w=2000" />
          </div>
        </div>
      </section>
      <section className="img-gallery">
        <h2>
          Technical Event <span>2018</span>
        </h2>

        <div className="gallery">
          <div className="">
            <img src="https://techspodelhincr.in/wp-content/uploads/2020/01/TECHSPO-Delhi-NCR-2020.png" />
          </div>
          <div className="wide">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3-frpxMXYcBK9lgjYTv6Z_MX9i1l7mbLnMg&usqp=CAU" />
          </div>
          <div className="wide">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6RGgNspJoUrClD_Oa6-XRfGOSU-kdjLF4FA&usqp=CAU" />
          </div>
          <div className="">
            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/tech-event-motion-poster-design-template-df7a48b3f947c2311df321e776cc3269.jpg?ts=1567082232" />
          </div>
          <div className="tall wide">
            <img src="https://img.freepik.com/free-vector/elegant-event-poster-with-black-splash_1361-2193.jpg?w=2000" />
          </div>
          <div className="wide">
            <img src="https://media.istockphoto.com/id/1153350345/photo/time-to-get-growing.jpg?b=1&s=170667a&w=0&k=20&c=rvLnZBe_WBVnF0AofEP3k0__q687hnGaZWGuGaVHM28=" />
          </div>
          <div className="wide">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt36Qaed5QifqWJB98i2FNA7h-Rs1OHfXPkA&usqp=CAU" />
          </div>
          <div className="wide">
            <img src="https://media.istockphoto.com/id/1325899588/photo/global-corporation-online-videoconference-in-meeting-room-with-diverse-people-sitting-in.jpg?s=170667a&w=is&k=20&c=1GkrJlZHjYgCtOP67FyY5wkSfcYWT5pLAkEKgC0QyK8=" />
          </div>
          <div className="wide">
            <img src="https://blog.10times.com/wp-content/uploads/2022/10/event-technology-trend.jpeg" />
          </div>
          <div className="">
            <img src="https://cdn.ces.tech/ces/media/topics/cesfeaturedtopics_op2.jpg?ext=.jpg" />
          </div>
          <div className="">
            <img src="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/171601/s300_Tech.png" />
          </div>
          <div className="">
            <img src="https://img.freepik.com/free-psd/vertical-poster-template-techno-store_23-2148979533.jpg?w=2000" />
          </div>
        </div>
      </section>
      <div id="slider">
        <div className="image">
          <img src="" />
          <h2 className="alt"></h2>
          <div className="controls">
            <div className="prev"></div>
            <div className="next"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
