import React from "react";
import styled from "styled-components";
import Graphs from "../../../assets/graphs.png";
import Curve from "../../../assets/curve.svg";
import borderBottom from "../../../assets/border_botom.svg";
import bgStars from "../../../assets/bg_stars.svg";

const HeroHome = styled.section`
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");
  font-family: "Roboto", sans-serif;
  position: relative;
  padding-top: 10vh;
  background-image: url(${bgStars}),
    linear-gradient(181deg, #001a57, #001b59 59%, #00267f);
  background-repeat: repeat-x, no-repeat;
  background-position: center 70px, 50%;
  background-size: 1440px auto, 100% auto;
  height: 60vh;
  overflow: hidden;

  .border_bottom {
    display: block;
    width: 100%;
    height: 85px;
    position: absolute;
    bottom: -2px;
    background: url(${borderBottom}) repeat top;
    background-size: 1440px auto;
  }
  .container {
    display: flex;
    max-width: 95%;
    margin: 0 auto;
    margin-top: 111px;
  }

  .container_illustration {
    width: 100%;
    display: block;
  }

  .container_illustration .big_svg {
    position: absolute;
    top: 400px;
    right: -172px;
    z-index: 1;
  }
  .container_illustration .bg_cloud_window {
    position: absolute;
    top: 1px;
  }
  .container_illustration .animation {
    position: relative;
  }
  .container_illustration .animation .piio_float_left {
    position: relative;
    z-index: 2;
    right: -34px;
  }
  .container_illustration .animation .piio_float_right {
    position: relative;
    top: 138px;
    z-index: 2;
    right: -84px;
  }

  .hero-content {
    min-width: 500px;
  }
  .hero-content h1 {
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 1.33;
    color: #fff;
    margin-top: 22px;
    letter-spacing: normal;
  }
  .hero-content .btn_blue {
    display: inline-block;
    color: #fff;
    font-size: 14px;
    text-align: center;
    font-weight: 500;
    padding: 15px 20.5px 13px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -o-border-radius: 4px;
    -ms-border-radius: 4px;
    border-radius: 4px;
    outline: 0;
    border: 0;
    -webkit-apparience: none;
    cursor: pointer;
    background-color: #0e4de3;
    box-shadow: 0 2px 4px 0 rgba(0, 25, 85, 0.1);
    line-height: 1rem;
    text-decoration: none;
  }
`;
const Header = () => (
  <>
    <HeroHome>
      <div className="container">
        <div className="hero-content">
          <h1>
            Creepy Ads We are a non creepy ad network that presents itself as
            actually very creepy.
          </h1>
          <a className="btn_scroll btn_blue" href="#">
            Start a Free Trial
          </a>
        </div>
        <div className="container_illustration">
          <svg
            style={{ position: "absolute", right: "-140px" }}
            className="bg_cloud_window"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={820}
            height={701}
            viewBox="0 0 820 701"
          >
            <defs>
              <linearGradient
                id="bg_home_hero-a"
                x1="51.172%"
                x2="51.172%"
                y1="98.556%"
                y2="4.81%"
              >
                <stop offset="0%" stopColor="#002273" />
                <stop offset="100%" stopColor="#1742A7" />
              </linearGradient>
              <linearGradient
                id="bg_home_hero-b"
                x1="51.172%"
                x2="51.172%"
                y1="3.81%"
                y2="98.556%"
              >
                <stop offset="0%" stopColor="#1354EA" />
                <stop offset="100%" stopColor="#144DD4" />
              </linearGradient>
              <linearGradient id="bg_home_hero-c" x1="0%" y1="50%" y2="50%">
                <stop offset="0%" stopColor="#00257C" />
                <stop offset="98.46%" stopColor="#00247C" stopOpacity={0} />
              </linearGradient>
              <radialGradient
                id="bg_home_hero-d"
                cx="50.543%"
                cy="0%"
                r="91.305%"
                fx="50.543%"
                fy="0%"
                gradientTransform="matrix(0 1 -.43048 0 .505 -.505)"
              >
                <stop offset="0%" stopColor="#0040E0" />
                <stop offset="100%" stopColor="#00247A" stopOpacity={0} />
              </radialGradient>
              <linearGradient
                id="bg_home_hero-e"
                x1="50%"
                x2="50%"
                y1="0%"
                y2="97.336%"
              >
                <stop offset="2.653%" stopColor="#184CC1" stopOpacity={0} />
                <stop offset="98.228%" stopColor="#246FFC" />
              </linearGradient>
              <linearGradient
                id="bg_home_hero-f"
                x1="50%"
                x2="50%"
                y1="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#184CC1" />
                <stop offset="97.336%" stopColor="#246FFC" />
              </linearGradient>
              <radialGradient
                id="bg_home_hero-g"
                cx="46.635%"
                cy="77.891%"
                r="72.487%"
                fx="46.635%"
                fy="77.891%"
                gradientTransform="matrix(.00731 -.999 .7737 .21175 -.14 1.08)"
              >
                <stop offset="0%" stopColor="#4DAEFF" />
                <stop offset="100%" stopColor="#0E5AE3" />
              </radialGradient>
              <radialGradient
                id="bg_home_hero-h"
                cx="46.635%"
                cy="77.891%"
                r="124.89%"
                fx="46.635%"
                fy="77.891%"
                gradientTransform="matrix(0 -1 .54987 0 .038 1.245)"
              >
                <stop offset="0%" stopColor="#4DAEFF" />
                <stop offset="100%" stopColor="#0E5AE3" stopOpacity={0} />
              </radialGradient>
              <path
                id="bg_home_hero-i"
                d="M129.438098,3.21777344 C158.014301,-0.131923945 183.812249,-0.131923945 206.831941,3.21777344 C241.361479,8.24231951 288.874307,-0.242319511 311.547306,4 C326.662639,6.82821301 364.800608,36.1615463 425.961212,92 L269,287.491379 L42,163.807377 L0.688805662,44.2998047 L129.438098,3.21777344 Z"
              />
              <rect id="bg_home_hero-l" width="45.926" height="51.917" />
              <filter
                id="bg_home_hero-k"
                width="102.2%"
                height="103.9%"
                x="-1.1%"
                y="-1%"
                filterUnits="objectBoundingBox"
              >
                <feOffset dy={1} in="SourceAlpha" result="shadowOffsetOuter1" />
                <feColorMatrix
                  in="shadowOffsetOuter1"
                  values="0 0 0 0 0.886431961   0 0 0 0 0.90419334   0 0 0 0 0.921954719  0 0 0 0.318812274 0"
                />
              </filter>
              <linearGradient
                id="bg_home_hero-n"
                x1="50%"
                x2="50%"
                y1="95.753%"
                y2="2.614%"
              >
                <stop offset="0%" stopColor="#F6F7FA" />
                <stop offset="100%" stopColor="#D2DFED" />
              </linearGradient>
              <rect id="bg_home_hero-m" width="40.186" height="46.148" />
              <linearGradient
                id="bg_home_hero-o"
                x1="40.082%"
                x2="82.603%"
                y1="16.088%"
                y2="88.525%"
              >
                <stop offset="2.38%" stopColor="#FDCF5F" />
                <stop offset="100%" stopColor="#F6A26C" />
              </linearGradient>
              <linearGradient
                id="bg_home_hero-q"
                x1="40.696%"
                x2="65.974%"
                y1="28.503%"
                y2="70.364%"
              >
                <stop offset="0%" stopColor="#266CEB" />
                <stop offset="100%" stopColor="#0D47AE" />
              </linearGradient>
              <linearGradient
                id="bg_home_hero-r"
                x1="71.844%"
                y1="100%"
                y2="11.27%"
              >
                <stop offset="0%" stopColor="#FFC41A" stopOpacity={0} />
                <stop offset="100%" stopColor="#FFB40B" />
              </linearGradient>
              <linearGradient
                id="bg_home_hero-s"
                x1="57.718%"
                x2="95.28%"
                y1="85.856%"
                y2="15.039%"
              >
                <stop offset="0%" stopColor="#FFC41A" stopOpacity={0} />
                <stop offset="100%" stopColor="#FF9B57" />
              </linearGradient>
              <linearGradient
                id="bg_home_hero-u"
                x1="59.912%"
                x2="4.714%"
                y1="70.079%"
                y2="8.822%"
              >
                <stop offset="0%" stopColor="#002B8F" />
                <stop offset="100%" stopColor="#1E5DF1" />
              </linearGradient>
              <path
                id="bg_home_hero-t"
                d="M0.105973305,0.806111309 C0.315826535,0.310859913 0.886810058,0.0797607091 1.3813003,0.28993774 C5.84626647,2.18770691 9.78717,4.19730785 13.2040109,6.31874056 L7.53557923,14.9181138 L0.105973305,3.40949264 C0.0752355552,1.74644585 0.0752355552,0.878652072 0.105973305,0.806111309 Z"
              />
              <linearGradient
                id="bg_home_hero-v"
                x1="95.866%"
                x2="11.141%"
                y1="68.955%"
                y2="15.186%"
              >
                <stop offset="0%" stopColor="#C7D7FF" stopOpacity={0} />
                <stop offset="100%" stopColor="#91B1FF" />
              </linearGradient>
              <linearGradient
                id="bg_home_hero-y"
                x1="88.933%"
                x2="42.442%"
                y1="8.832%"
                y2="54.375%"
              >
                <stop offset="0%" stopColor="#40ABFF" />
                <stop offset="36.44%" stopColor="#346FF9" />
                <stop offset="100%" stopColor="#0E4DE3" />
              </linearGradient>
              <path
                id="bg_home_hero-x"
                d="M33.2644269,9.15708294 C33.5907079,9.2746914 33.7746171,9.6829324 33.6751996,10.0689147 C33.6215518,10.2771988 33.4921691,10.4463225 33.3223122,10.5301942 L28.355433,12.9827343 C26.6526056,15.6839924 21.6856455,22.4702543 12.1359707,31.6595745 C11.9422892,31.8459402 11.6344319,31.8397741 11.4483486,31.6457982 C11.3486736,31.5418956 11.3000481,31.3991245 11.3155468,31.2558748 L10.6865027,26.5453355 L1.30711489,30.4133507 C1.04375822,30.4939832 0.758616782,30.4590255 0.522454984,30.3171531 C0.0617931159,30.0404141 -0.0876503935,29.442058 0.188663564,28.9806874 L13.774696,4.11013196 C15.8230999,0.738362978 19.9888156,-0.679723367 23.6644989,0.743460931 L24.8367449,1.1973417 C25.1139639,1.30467788 25.3847909,1.42789095 25.6478846,1.56637077 C28.114579,2.86471947 29.5933932,5.30645827 29.7763464,7.89979923 L33.2644269,9.15708294 Z"
              />
              <linearGradient
                id="bg_home_hero-A"
                x1="116.987%"
                x2="31.182%"
                y1="0%"
                y2="78.078%"
              >
                <stop offset="0%" stopColor="#FFC41A" />
                <stop offset="100%" stopColor="#FF690B" />
              </linearGradient>
              <linearGradient
                id="bg_home_hero-B"
                x1="26.494%"
                x2="69.719%"
                y1="67.071%"
                y2="6.58%"
              >
                <stop offset="0%" stopColor="#00307A" stopOpacity={0} />
                <stop offset="100%" stopColor="#00307A" />
              </linearGradient>
              <path
                id="bg_home_hero-C"
                d="M0.00631440003,1.09916517 C0.139923492,0.440107817 0.781685918,0.0143144695 1.4397309,0.148129114 L18.0765578,3.53126023 C18.7033777,8.93414229 16.7484322,12.0289497 12.2117211,12.8156825 C11.42828,12.9515428 10.3219958,12.9527673 8.89286846,12.819356 L0.896921233,5.86686743 C0.448104914,5.47662094 0.177076261,4.92032883 0.146135668,4.32586401 C0.0380038462,2.24831613 -0.00860324307,1.17274986 0.00631440003,1.09916517 Z"
              />
              <linearGradient
                id="bg_home_hero-E"
                x1="52.114%"
                x2="50%"
                y1="10.207%"
                y2="90.478%"
              >
                <stop offset="0%" stopColor="#FFF9D9" />
                <stop offset="14.921%" stopColor="#D9EDFF" stopOpacity=".477" />
                <stop offset="71.846%" stopColor="#D9EDFF" stopOpacity=".104" />
                <stop offset="100%" stopColor="#D9EDFF" stopOpacity={0} />
              </linearGradient>
              <path
                id="bg_home_hero-F"
                d="M0.108622638,0.820506153 C0.323722198,0.316410983 0.908980309,0.0811850075 1.4158328,0.2951152 C5.99242313,2.2267731 10.0318493,4.27225977 13.5341112,6.43157522 L7.72396871,15.1845087 L0.108622638,3.47037643 C0.0771164441,1.77763238 0.0771164441,0.894342288 0.108622638,0.820506153 Z"
              />
              <path
                id="bg_home_hero-H"
                d="M34.0960376,9.32060227 C34.4304756,9.44031089 34.6189826,9.85584191 34.5170796,10.2487168 C34.4620906,10.4607202 34.3294733,10.632864 34.15537,10.7182334 L29.0643188,13.2145689 C27.3189207,15.9640637 22.2277866,22.8715089 12.43937,32.224924 C12.2408464,32.4146178 11.9252927,32.4083415 11.7345573,32.2109017 C11.6323905,32.1051437 11.5825493,31.9598232 11.5984355,31.8140154 L10.9536652,27.0193594 L1.33979276,30.9564463 C1.06985217,31.0385186 0.777582202,31.0029367 0.535516359,30.8585309 C0.0633379438,30.57685 -0.0898416533,29.967809 0.193380153,29.4981997 L14.1190634,4.18352717 C16.2186774,0.751548031 20.488536,-0.691861284 24.2561114,0.756737019 L25.4576635,1.21872281 C25.741813,1.3279757 26.0194106,1.453389 26.2890817,1.59434167 C28.8174434,2.91587518 30.3332281,5.40121645 30.520755,8.04086707 L34.0960376,9.32060227 Z"
              />
              <path
                id="bg_home_hero-J"
                d="M0.00647226003,1.11879312 C0.143421579,0.447966886 0.801228066,0.014570085 1.47572417,0.150774277 L18.5284717,3.59431845 C19.1709622,9.09368054 17.167143,12.2437524 12.5170142,13.044534 C11.713987,13.1828204 10.5800457,13.1840667 9.11519017,13.0482731 L0.919344264,5.97163292 C0.459307537,5.57441774 0.181503168,5.00819185 0.149789059,4.40311158 C0.0389539423,2.28846464 -0.00881832414,1.19369182 0.00647226003,1.11879312 Z"
              />
            </defs>
            <g fill="none" fillRule="evenodd" transform="translate(-117)">
              <g fillRule="nonzero" opacity=".5" transform="translate(589 392)">
                <polygon
                  fill="url(#bg_home_hero-a)"
                  points="0 0 239 0 239 309 0 309"
                />
                <path
                  fill="url(#bg_home_hero-b)"
                  d="M5,0 L234,0 C236.761424,-5.07265313e-16 239,2.23857625 239,5 L239,38 L0,38 L0,5 C-3.38176876e-16,2.23857625 2.23857625,5.07265313e-16 5,0 Z"
                />
                <rect
                  width={56}
                  height={295}
                  x={43}
                  fill="url(#bg_home_hero-c)"
                />
                <path
                  fill="#00247A"
                  d="M179,26 C175.686292,26 173,23.3137085 173,20 C173,16.6862915 175.686292,14 179,14 C182.313708,14 185,16.6862915 185,20 C185,23.3137085 182.313708,26 179,26 Z M198,26 C194.686292,26 192,23.3137085 192,20 C192,16.6862915 194.686292,14 198,14 C201.313708,14 204,16.6862915 204,20 C204,23.3137085 201.313708,26 198,26 Z M217,26 C213.686292,26 211,23.3137085 211,20 C211,16.6862915 213.686292,14 217,14 C220.313708,14 223,16.6862915 223,20 C223,23.3137085 220.313708,26 217,26 Z"
                />
              </g>
              <rect
                width={1043}
                height={664}
                fill="url(#bg_home_hero-d)"
                fillRule="nonzero"
              />
              <g transform="translate(294 47)">
                <g fillRule="nonzero">
                  <path
                    fill="url(#bg_home_hero-e)"
                    d="M190.53248,8.96414018 C262.708459,33.1196231 469.431021,4.81189856 470.570707,44.2942773 C471.710393,83.7766561 419.986949,106.660577 306.649703,108.448783 C193.312458,110.236988 241.815131,85.3127011 154.986299,95.5103524 C68.1574682,105.708004 0.961209702,81.8557269 0.00552368011,48.7476954 C-0.950162342,15.6396639 118.3565,-15.1913427 190.53248,8.96414018 Z"
                    opacity=".2"
                  />
                  <path
                    fill="url(#bg_home_hero-e)"
                    d="M198.332239,31.7738651 C257.931583,47 428.63282,29.1565466 429.573916,54.0438167 C430.515013,78.9310868 387.804358,93.3557068 294.216082,94.4828821 C200.627807,95.6100574 240.678908,79.8993153 168.979966,86.3272893 C97.2810246,92.7552633 41.7936874,77.7202508 41.0045293,56.8509783 C40.2153712,35.9817058 138.732895,16.5477302 198.332239,31.7738651 Z"
                    opacity=".288"
                  />
                  <path
                    fill="url(#bg_home_hero-f)"
                    d="M225.537235,38 C280.177856,47 388.598288,35.8096601 389.345637,55.619504 C390.092986,75.429348 339.315438,85.8840147 281.85443,87.8083128 C224.393422,89.7326109 239.339156,76.2000415 182.401145,81.3165996 C125.463135,86.4331576 81.399185,74.4655432 80.7724938,57.853957 C80.1458027,41.2423708 170.896613,29 225.537235,38 Z"
                    opacity=".288"
                  />
                  <path
                    fill="url(#bg_home_hero-g)"
                    d="M217.333333,47 C274.020716,52 354.76477,40.0411036 355.347432,56.7263777 C355.930095,73.4116518 316.341931,82.2173233 271.543081,83.8381055 C226.74423,85.4588876 238.396509,74.0607853 194.005407,78.3703181 C149.614306,82.6798509 115.260326,72.5998662 114.771733,58.6083946 C114.28314,44.616923 160.645951,42 217.333333,47 Z"
                  />
                  <path
                    fill="url(#bg_home_hero-h)"
                    d="M222.786005,55.8089978 C262.037342,58.2670489 317.94594,52.3879332 318.349386,60.5905845 C318.752832,68.7932358 291.341294,73.122194 260.321784,73.918987 C229.302275,74.7157801 237.370517,69.1123565 206.633341,71.2309669 C175.896164,73.3495773 152.108866,68.3941537 151.770556,61.5158033 C151.432246,54.6374528 183.534668,53.3509467 222.786005,55.8089978 Z"
                    style={{ mixBlendMode: "screen" }}
                  />
                </g>
                <g transform="translate(17 62)">
                  <mask id="bg_home_hero-j" fill="#fff">
                    <use xlinkHref="#bg_home_hero-i" />
                  </mask>
                  <g mask="url(#bg_home_hero-j)">
                    <g transform="matrix(-1 0 0 1 296 -6)">
                      <g transform="translate(44 84)">
                        <g fillRule="nonzero">
                          <use
                            fill="#000"
                            filter="url(#bg_home_hero-k)"
                            xlinkHref="#bg_home_hero-l"
                          />
                          <use fill="#FEFEFE" xlinkHref="#bg_home_hero-l" />
                        </g>
                        <g transform="translate(2.87 2.884)">
                          <mask id="bg_home_hero-p" fill="#fff">
                            <use xlinkHref="#bg_home_hero-m" />
                          </mask>
                          <use
                            fill="url(#bg_home_hero-n)"
                            fillRule="nonzero"
                            xlinkHref="#bg_home_hero-m"
                          />
                          <ellipse
                            cx="10.405"
                            cy="9.734"
                            fill="url(#bg_home_hero-o)"
                            fillRule="nonzero"
                            mask="url(#bg_home_hero-p)"
                            rx="4.664"
                            ry="4.687"
                          />
                          <path
                            fill="url(#bg_home_hero-q)"
                            fillRule="nonzero"
                            d="M-1.43519988,46.8477794 C-1.43519988,46.8477794 5.42707482,38.2021635 19.1516242,20.9109315 L38.5421927,46.8477794 C11.8905977,46.8477794 -1.43519988,46.8477794 -1.43519988,46.8477794 Z"
                            mask="url(#bg_home_hero-p)"
                          />
                          <path
                            fill="#3B81FE"
                            fillRule="nonzero"
                            d="M9.3287992,51.1923555 C9.3287992,51.1923555 20.1089333,37.9739256 41.6692014,11.5370657 L72.1303731,51.1923555 C30.2626572,51.1923555 9.3287992,51.1923555 9.3287992,51.1923555 Z"
                            mask="url(#bg_home_hero-p)"
                          />
                        </g>
                      </g>
                      <g transform="rotate(95 28.857 31.456)">
                        <g transform="rotate(-6 220.055 10.063)">
                          <polygon
                            fill="url(#bg_home_hero-r)"
                            fillRule="nonzero"
                            points="53.786 .487 58.226 2.83 61.776 8.524 46.357 32.867 .082 32.867"
                            opacity=".502"
                          />
                          <polygon
                            fill="url(#bg_home_hero-s)"
                            fillRule="nonzero"
                            points="54.711 .092 58.226 2.83 60.061 7.697 46.357 23.35 21.098 27.129"
                          />
                        </g>
                        <g transform="translate(49.119)">
                          <mask id="bg_home_hero-w" fill="#fff">
                            <use xlinkHref="#bg_home_hero-t" />
                          </mask>
                          <use
                            fill="url(#bg_home_hero-u)"
                            fillRule="nonzero"
                            xlinkHref="#bg_home_hero-t"
                          />
                          <polygon
                            fill="url(#bg_home_hero-v)"
                            fillRule="nonzero"
                            points="-1.576 .265 13.249 6.88 13.247 .627 -2.295 -3.121"
                            mask="url(#bg_home_hero-w)"
                            transform="rotate(12 5.477 1.88)"
                          />
                        </g>
                        <g transform="translate(46.2 1.461)">
                          <mask id="bg_home_hero-z" fill="#fff">
                            <use xlinkHref="#bg_home_hero-x" />
                          </mask>
                          <use
                            fill="url(#bg_home_hero-y)"
                            fillRule="nonzero"
                            xlinkHref="#bg_home_hero-x"
                          />
                          <path
                            fill="#042E93"
                            fillRule="nonzero"
                            d="M20.5572076,12.8370543 L29.3807532,17.9755962 C29.8633941,18.2566703 30.0289524,18.8752537 29.7513881,19.3604165 C29.4760968,19.8416062 28.8634471,20.0081765 28.3829966,19.7324617 L28.3774689,19.7292661 L19.5539233,14.5907242 C19.0712824,14.3096501 18.9057241,13.6910667 19.1832884,13.2059039 C19.4585797,12.7247142 20.0712294,12.5581439 20.5516799,12.8338587 L20.5572076,12.8370543 Z M18.835204,16.1305014 L27.6587496,21.2690433 C28.1413905,21.5501174 28.3069489,22.1687008 28.0293845,22.6538636 C27.7540932,23.1350533 27.1414435,23.3016236 26.660993,23.0259088 L26.6554654,23.0227132 L17.8319197,17.8841713 C17.3492789,17.6030972 17.1837205,16.9845138 17.4612849,16.499351 C17.7365761,16.0181613 18.3492259,15.851591 18.8296764,16.1273058 L18.835204,16.1305014 Z M17.7166786,19.7696241 L26.5402242,24.908166 C27.0228651,25.1892401 27.1884234,25.8078235 26.9108591,26.2929863 C26.6355678,26.774176 26.0229181,26.9407463 25.5424676,26.6650315 L25.5369399,26.6618359 L16.7133943,21.523294 C16.2307534,21.2422199 16.0651951,20.6236365 16.3427594,20.1384737 C16.6180507,19.657284 17.2307005,19.4907137 17.711151,19.7664285 L17.7166786,19.7696241 Z"
                            mask="url(#bg_home_hero-z)"
                            opacity=".966"
                          />
                          <polygon
                            fill="url(#bg_home_hero-A)"
                            fillRule="nonzero"
                            points="4.863 18.509 8.113 20.851 10.713 26.545 2.191 32.165 -1.566 29.711"
                            mask="url(#bg_home_hero-z)"
                          />
                          <polygon
                            fill="url(#bg_home_hero-B)"
                            fillRule="nonzero"
                            points="5.829 17.291 -1.006 27.913 -.868 29.955 12.136 16.804"
                            mask="url(#bg_home_hero-z)"
                            opacity=".463"
                          />
                        </g>
                        <g transform="translate(42.553 7.306)">
                          <mask id="bg_home_hero-D" fill="#fff">
                            <use xlinkHref="#bg_home_hero-C" />
                          </mask>
                          <use
                            fill="#1E5DF1"
                            fillRule="nonzero"
                            xlinkHref="#bg_home_hero-C"
                          />
                          <path
                            fill="#0A3495"
                            fillRule="nonzero"
                            d="M9.46457798,10.902883 C8.78277683,10.902883 8.2300678,10.3493237 8.2300678,9.66647362 C8.2300678,8.98362356 8.78277683,8.43006421 9.46457798,8.43006421 C10.1463791,8.43006421 10.6990881,8.98362356 10.6990881,9.66647362 C10.6990881,10.3493237 10.1463791,10.902883 9.46457798,10.902883 Z M6.54664484,8.39259726 C5.8648437,8.39259726 5.31213467,7.8390379 5.31213467,7.15618784 C5.31213467,6.47333777 5.8648437,5.91977842 6.54664484,5.91977842 C7.22844599,5.91977842 7.78115502,6.47333777 7.78115502,7.15618784 C7.78115502,7.8390379 7.22844599,8.39259726 6.54664484,8.39259726 Z M3.42296002,5.88231147 C2.74115888,5.88231147 2.18844985,5.32875212 2.18844985,4.64590205 C2.18844985,3.96305199 2.74115888,3.40949264 3.42296002,3.40949264 C4.10476116,3.40949264 4.65747019,3.96305199 4.65747019,4.64590205 C4.65747019,5.32875212 4.10476116,5.88231147 3.42296002,5.88231147 Z"
                            mask="url(#bg_home_hero-D)"
                          />
                          <polygon
                            fill="url(#bg_home_hero-v)"
                            fillRule="nonzero"
                            points=".008 -.339 18.701 6.587 18.701 .79 -.486 -2.679"
                            mask="url(#bg_home_hero-D)"
                          />
                        </g>
                        <ellipse
                          cx="67.964"
                          cy="8.645"
                          fill="#FFF"
                          fillRule="nonzero"
                          rx="1.581"
                          ry="1.583"
                        />
                      </g>
                    </g>
                  </g>
                  <polygon
                    fill="url(#bg_home_hero-E)"
                    fillRule="nonzero"
                    points="160.307 -64 94.712 125.088 340 129 277.909 -53.707"
                    mask="url(#bg_home_hero-j)"
                  />
                  <g mask="url(#bg_home_hero-j)">
                    <g transform="rotate(-15 259.245 -339.905)">
                      <g transform="rotate(-6 224.212 10.124)">
                        <polygon
                          fill="url(#bg_home_hero-r)"
                          fillRule="nonzero"
                          points="55.131 .496 59.681 2.88 63.321 8.676 47.516 33.454 .084 33.454"
                          opacity=".502"
                        />
                        <polygon
                          fill="url(#bg_home_hero-s)"
                          fillRule="nonzero"
                          points="56.079 .094 59.681 2.88 61.562 7.834 47.516 23.767 21.626 27.614"
                        />
                      </g>
                      <g transform="translate(50.347)">
                        <mask id="bg_home_hero-G" fill="#fff">
                          <use xlinkHref="#bg_home_hero-F" />
                        </mask>
                        <use
                          fill="url(#bg_home_hero-u)"
                          fillRule="nonzero"
                          xlinkHref="#bg_home_hero-F"
                        />
                        <polygon
                          fill="url(#bg_home_hero-v)"
                          fillRule="nonzero"
                          points="-1.611 .28 13.57 6.994 13.577 .627 -2.343 -3.166"
                          mask="url(#bg_home_hero-G)"
                          transform="rotate(12 5.617 1.914)"
                        />
                      </g>
                      <g transform="translate(47.356 1.487)">
                        <mask id="bg_home_hero-I" fill="#fff">
                          <use xlinkHref="#bg_home_hero-H" />
                        </mask>
                        <use
                          fill="url(#bg_home_hero-y)"
                          fillRule="nonzero"
                          xlinkHref="#bg_home_hero-H"
                        />
                        <path
                          fill="#042E93"
                          fillRule="nonzero"
                          d="M21.0711378,13.0662874 L30.115272,18.296589 C30.6099789,18.5826823 30.7796762,19.2123118 30.4951728,19.7061382 C30.2129992,20.1959206 29.5850332,20.3654653 29.0925715,20.0848271 L29.0869057,20.0815744 L20.0427714,14.8512728 C19.5480645,14.5651795 19.3783672,13.9355501 19.6628706,13.4417236 C19.9450442,12.9519413 20.5730102,12.7823965 21.0654719,13.0630348 L21.0711378,13.0662874 Z M19.3060841,16.418546 L28.3502184,21.6488476 C28.8449253,21.934941 29.0146226,22.5645704 28.7301191,23.0583969 C28.4479456,23.5481792 27.8199796,23.717724 27.3275178,23.4370857 L27.321852,23.4338331 L18.2777177,18.2035315 C17.7830108,17.9174382 17.6133135,17.2878087 17.897817,16.7939822 C18.1799905,16.3041999 18.8079565,16.1346551 19.3004183,16.4152934 L19.3060841,16.418546 Z M18.1595955,20.1226531 L27.2037298,25.3529547 C27.6984367,25.639048 27.868134,26.2686775 27.5836306,26.7625039 C27.301457,27.2522863 26.673491,27.421831 26.1810293,27.1411928 L26.1753634,27.1379401 L17.1312292,21.9076385 C16.6365223,21.6215452 16.466825,20.9919158 16.7513284,20.4980893 C17.033502,20.008307 17.661468,19.8387622 18.1539297,20.1194005 L18.1595955,20.1226531 Z"
                          mask="url(#bg_home_hero-I)"
                          opacity=".966"
                        />
                        <polygon
                          fill="url(#bg_home_hero-A)"
                          fillRule="nonzero"
                          points="4.985 18.839 8.316 21.224 10.98 27.019 2.246 32.739 -1.605 30.242"
                          mask="url(#bg_home_hero-I)"
                        />
                        <polygon
                          fill="url(#bg_home_hero-B)"
                          fillRule="nonzero"
                          points="5.975 17.6 -1.031 28.411 -.889 30.49 12.439 17.104"
                          mask="url(#bg_home_hero-I)"
                          opacity=".463"
                        />
                      </g>
                      <g transform="translate(43.617 7.437)">
                        <mask id="bg_home_hero-K" fill="#fff">
                          <use xlinkHref="#bg_home_hero-J" />
                        </mask>
                        <use
                          fill="#1E5DF1"
                          fillRule="nonzero"
                          xlinkHref="#bg_home_hero-J"
                        />
                        <path
                          fill="#0A3495"
                          fillRule="nonzero"
                          d="M9.70119242,11.0975774 C9.00234626,11.0975774 8.4358195,10.534133 8.4358195,9.83908923 C8.4358195,9.14404541 9.00234626,8.58060107 9.70119242,8.58060107 C10.4000386,8.58060107 10.9665653,9.14404541 10.9665653,9.83908923 C10.9665653,10.534133 10.4000386,11.0975774 9.70119242,11.0975774 Z M6.71031097,8.54246506 C6.0114648,8.54246506 5.44493804,7.97902072 5.44493804,7.28397691 C5.44493804,6.58893309 6.0114648,6.02548875 6.71031097,6.02548875 C7.40915713,6.02548875 7.97568389,6.58893309 7.97568389,7.28397691 C7.97568389,7.97902072 7.40915713,8.54246506 6.71031097,8.54246506 Z M3.50853402,5.98735275 C2.80968785,5.98735275 2.24316109,5.42390841 2.24316109,4.72886459 C2.24316109,4.03382077 2.80968785,3.47037643 3.50853402,3.47037643 C4.20738019,3.47037643 4.77390694,4.03382077 4.77390694,4.72886459 C4.77390694,5.42390841 4.20738019,5.98735275 3.50853402,5.98735275 Z"
                          mask="url(#bg_home_hero-K)"
                        />
                        <polygon
                          fill="url(#bg_home_hero-v)"
                          fillRule="nonzero"
                          points=".008 -.345 19.168 6.704 19.168 .804 -.498 -2.727"
                          mask="url(#bg_home_hero-K)"
                        />
                      </g>
                      <ellipse
                        cx="69.663"
                        cy="8.8"
                        fill="#FFF"
                        fillRule="nonzero"
                        rx="1.62"
                        ry="1.611"
                      />
                    </g>
                  </g>
                  <polygon
                    fill="url(#bg_home_hero-E)"
                    fillRule="nonzero"
                    points="167.284 -5 109.712 172.332 325 176 270.503 4.653"
                    mask="url(#bg_home_hero-j)"
                    opacity=".206"
                  />
                  <polygon
                    fill="url(#bg_home_hero-E)"
                    fillRule="nonzero"
                    points="190.077 -5 158.712 259.528 276 265 246.31 9.4"
                    mask="url(#bg_home_hero-j)"
                    opacity=".104"
                  />
                </g>
              </g>
            </g>
          </svg>

          <div className="animation">
            <span className="piio_float_left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={151}
                height={113}
                viewBox="0 0 151 113"
              >
                <defs>
                  <rect id="piio_1-b" width="71.885" height="80.87" />
                  <filter
                    id="piio_1-a"
                    width="101.4%"
                    height="102.5%"
                    x="-.7%"
                    y="-.6%"
                    filterUnits="objectBoundingBox"
                  >
                    <feOffset
                      dy={1}
                      in="SourceAlpha"
                      result="shadowOffsetOuter1"
                    />
                    <feColorMatrix
                      in="shadowOffsetOuter1"
                      values="0 0 0 0 0.886431961   0 0 0 0 0.90419334   0 0 0 0 0.921954719  0 0 0 0.318812274 0"
                    />
                  </filter>
                  <linearGradient
                    id="piio_1-d"
                    x1="50%"
                    x2="50%"
                    y1="95.753%"
                    y2="2.614%"
                  >
                    <stop offset="0%" stopColor="#F6F7FA" />
                    <stop offset="100%" stopColor="#D2DFED" />
                  </linearGradient>
                  <rect id="piio_1-c" width="62.899" height="71.885" />
                  <linearGradient
                    id="piio_1-e"
                    x1="40.082%"
                    x2="82.603%"
                    y1="16.088%"
                    y2="88.525%"
                  >
                    <stop offset="2.38%" stopColor="#FDCF5F" />
                    <stop offset="100%" stopColor="#F6A26C" />
                  </linearGradient>
                  <linearGradient
                    id="piio_1-g"
                    x1="40.696%"
                    x2="65.974%"
                    y1="28.503%"
                    y2="70.364%"
                  >
                    <stop offset="0%" stopColor="#266CEB" />
                    <stop offset="100%" stopColor="#0D47AE" />
                  </linearGradient>
                  <linearGradient
                    id="piio_1-h"
                    x1="71.844%"
                    y1="100%"
                    y2="11.27%"
                  >
                    <stop offset="0%" stopColor="#FFC41A" stopOpacity={0} />
                    <stop offset="100%" stopColor="#FFB40B" />
                  </linearGradient>
                  <linearGradient
                    id="piio_1-i"
                    x1="57.718%"
                    x2="95.28%"
                    y1="85.856%"
                    y2="15.039%"
                  >
                    <stop offset="0%" stopColor="#FFC41A" stopOpacity={0} />
                    <stop offset="100%" stopColor="#FF9B57" />
                  </linearGradient>
                  <linearGradient
                    id="piio_1-k"
                    x1="59.912%"
                    x2="4.714%"
                    y1="70.079%"
                    y2="8.822%"
                  >
                    <stop offset="0%" stopColor="#002B8F" />
                    <stop offset="100%" stopColor="#1E5DF1" />
                  </linearGradient>
                  <path
                    id="piio_1-j"
                    d="M0.13644063,1.03642883 C0.406626663,0.399677031 1.14176795,0.102549483 1.77842413,0.372777095 C7.52706808,2.81276602 12.6009814,5.39653866 17.000164,8.12409501 L9.70205826,19.1804321 L0.13644063,4.38363339 C0.0968657773,2.24543038 0.0968657773,1.12969552 0.13644063,1.03642883 Z"
                  />
                  <linearGradient
                    id="piio_1-l"
                    x1="95.866%"
                    x2="11.141%"
                    y1="68.955%"
                    y2="15.186%"
                  >
                    <stop offset="0%" stopColor="#C7D7FF" stopOpacity={0} />
                    <stop offset="100%" stopColor="#91B1FF" />
                  </linearGradient>
                  <linearGradient
                    id="piio_1-o"
                    x1="88.933%"
                    x2="42.442%"
                    y1="8.832%"
                    y2="54.375%"
                  >
                    <stop offset="0%" stopColor="#40ABFF" />
                    <stop offset="36.44%" stopColor="#346FF9" />
                    <stop offset="100%" stopColor="#0E4DE3" />
                  </linearGradient>
                  <path
                    id="piio_1-n"
                    d="M38.337046,10.1568847 L42.8279497,11.7733923 C43.2480365,11.9246032 43.4848195,12.4494845 43.3568195,12.9457475 C43.287748,13.2135414 43.1211677,13.430986 42.902477,13.5388211 L36.5076199,16.692087 C34.3152297,20.165133 27.9202686,28.890327 15.6250623,40.7051672 C15.3756973,40.9447803 14.979331,40.9368524 14.7397488,40.6874548 C14.6114173,40.5538657 14.5488119,40.370303 14.5687666,40.1861248 L14.253607,37.8293548 L13.7588722,34.1297171 L1.68291042,39.1028795 C1.34383871,39.2065498 0.976719107,39.1616042 0.672660792,38.9791969 C0.0795586367,38.6233895 -0.112849882,37.8540745 0.242904338,37.2608838 C3.38225157,31.5219737 5.736762,27.2177911 7.30643561,24.3483361 C9.62387685,20.1119181 13.1000387,13.7572912 17.7349212,5.28445537 C20.3722411,0.949323829 25.7356001,-0.873930043 30.4680424,0.95587834 L31.977309,1.53943933 C32.3342286,1.67744299 32.6829182,1.83585979 33.0216514,2.01390527 C36.1975204,3.68321075 38.1014938,6.82258921 38.337046,10.1568847 Z"
                  />
                  <linearGradient
                    id="piio_1-q"
                    x1="116.987%"
                    x2="31.182%"
                    y1="0%"
                    y2="78.078%"
                  >
                    <stop offset="0%" stopColor="#FFC41A" />
                    <stop offset="100%" stopColor="#FF690B" />
                  </linearGradient>
                  <polygon
                    id="piio_1-r"
                    points="8.453 0 12.637 3.012 15.984 10.333 5.012 17.558 .175 14.403"
                  />
                  <linearGradient
                    id="piio_1-s"
                    x1="26.494%"
                    x2="69.719%"
                    y1="67.071%"
                    y2="6.58%"
                  >
                    <stop offset="0%" stopColor="#00307A" stopOpacity={0} />
                    <stop offset="100%" stopColor="#00307A" />
                  </linearGradient>
                  <path
                    id="piio_1-t"
                    d="M0.00812979003,1.41321237 C0.180151496,0.565852908 1.00642062,0.0184043179 1.85365353,0.190451718 L23.2735681,4.54019172 C24.0805988,11.4867544 21.5636064,15.4657925 15.7225909,16.4773061 C14.7139105,16.6519836 13.2895696,16.653558 11.4495681,16.4820292 L1.15478609,7.54311527 C0.576935077,7.04136977 0.227985686,6.32613707 0.188149672,5.56182515 C0.0489299519,2.89069217 -0.0110766754,1.50782124 0.00812979003,1.41321237 Z"
                  />
                </defs>
                <g
                  fill="none"
                  fillRule="evenodd"
                  transform="translate(-39 -33)"
                >
                  <g transform="translate(118 64)">
                    <g fillRule="nonzero">
                      <use
                        fill="#000"
                        filter="url(#piio_1-a)"
                        xlinkHref="#piio_1-b"
                      />
                      <use fill="#FEFEFE" xlinkHref="#piio_1-b" />
                    </g>
                    <g transform="translate(4.493 4.493)">
                      <mask id="piio_1-f" fill="#fff">
                        <use xlinkHref="#piio_1-c" />
                      </mask>
                      <use
                        fill="url(#piio_1-d)"
                        fillRule="nonzero"
                        xlinkHref="#piio_1-c"
                      />
                      <circle
                        cx="16.286"
                        cy="15.163"
                        r="7.301"
                        fill="url(#piio_1-e)"
                        fillRule="nonzero"
                        mask="url(#piio_1-f)"
                      />
                      <path
                        fill="url(#piio_1-g)"
                        fillRule="nonzero"
                        d="M-2.24639981,72.9744256 C-2.24639981,72.9744256 8.49455189,59.5072162 29.9764553,32.5727972 L60.3269104,72.9744256 C18.6113703,72.9744256 -2.24639981,72.9744256 -2.24639981,72.9744256 Z"
                        mask="url(#piio_1-f)"
                      />
                      <path
                        fill="#3B81FE"
                        fillRule="nonzero"
                        d="M14.6015987,79.7419384 C14.6015987,79.7419384 31.4748521,59.1516918 65.2213587,17.9711985 L112.899714,79.7419384 C47.3676373,79.7419384 14.6015987,79.7419384 14.6015987,79.7419384 Z"
                        mask="url(#piio_1-f)"
                      />
                    </g>
                  </g>
                  <g transform="rotate(30 16.652 69.372)">
                    <g fillRule="nonzero" transform="rotate(-6 282.984 12.909)">
                      <polygon
                        fill="url(#piio_1-h)"
                        points="69.25 .626 74.966 3.638 79.537 10.959 59.685 42.257 .106 42.257"
                        opacity=".502"
                      />
                      <polygon
                        fill="url(#piio_1-i)"
                        points="70.441 .118 74.966 3.638 77.328 9.896 59.685 30.021 27.164 34.881"
                      />
                    </g>
                    <g transform="translate(47.587)">
                      <g transform="translate(15.653)">
                        <mask id="piio_1-m" fill="#fff">
                          <use xlinkHref="#piio_1-j" />
                        </mask>
                        <use
                          fill="url(#piio_1-k)"
                          fillRule="nonzero"
                          xlinkHref="#piio_1-j"
                        />
                        <polygon
                          fill="url(#piio_1-l)"
                          fillRule="nonzero"
                          points="-2.028 .343 17.055 8.843 17.055 .803 -2.953 -4.01"
                          mask="url(#piio_1-m)"
                          transform="rotate(12 7.051 2.417)"
                        />
                      </g>
                      <g transform="translate(11.897 1.879)">
                        <mask id="piio_1-p" fill="#fff">
                          <use xlinkHref="#piio_1-n" />
                        </mask>
                        <use
                          fill="url(#piio_1-o)"
                          fillRule="nonzero"
                          xlinkHref="#piio_1-n"
                        />
                        <g
                          fill="#042E93"
                          fillRule="nonzero"
                          mask="url(#piio_1-p)"
                          opacity=".966"
                        >
                          <path
                            d="M5.72419094,0.65178503 L17.4144502,6.65468155 C18.0539877,6.98308126 18.3085039,7.76614454 17.9842595,8.40779879 C17.6627206,9.04409906 16.8862385,9.29926354 16.2499382,8.9777246 C16.2474471,8.97646579 16.2449601,8.97519889 16.2424772,8.97392394 L4.55221796,2.97102742 C3.91268042,2.64262772 3.65816421,1.85956443 3.98240865,1.21791018 C4.30394758,0.581609914 5.08042968,0.326445436 5.71672995,0.647984369 C5.71922105,0.649243187 5.72170806,0.65051008 5.72419094,0.65178503 Z M3.73172974,4.99646418 L15.421989,10.9993607 C16.0615265,11.3277604 16.3160427,12.1108237 15.9917983,12.7524779 C15.6702594,13.3887782 14.8937773,13.6439427 14.257477,13.3224038 C14.2549859,13.3211449 14.2524989,13.319878 14.250016,13.3186031 L2.55975675,7.31570657 C1.92021921,6.98730687 1.665703,6.20424359 1.98994744,5.56258934 C2.31148638,4.92628907 3.08796847,4.67112459 3.72426874,4.99266352 C3.72675984,4.99392234 3.72924685,4.99518923 3.73172974,4.99646418 Z M2.53843854,9.74430435 L14.2286978,15.7472009 C14.8682353,16.0756006 15.1227515,16.8586639 14.7985071,17.5003181 C14.4769682,18.1366184 13.7004861,18.3917829 13.0641858,18.0702439 C13.0616947,18.0689851 13.0592077,18.0677182 13.0567248,18.0664433 L1.36646556,12.0635467 C0.726928015,11.735147 0.472411809,10.9520838 0.796656247,10.3104295 C1.11819518,9.67412924 1.89467727,9.41896476 2.53097754,9.74050369 C2.53346864,9.74176251 2.53595566,9.7430294 2.53843854,9.74430435 Z"
                            transform="rotate(8 -100.715 157.015)"
                          />
                        </g>
                        <ellipse
                          cx="28.02"
                          cy="9.237"
                          fill="#FFF"
                          fillRule="nonzero"
                          mask="url(#piio_1-p)"
                          rx="2.035"
                          ry="2.035"
                        />
                        <g mask="url(#piio_1-p)">
                          <use
                            fill="url(#piio_1-q)"
                            fillRule="nonzero"
                            transform="translate(-2.191 23.797)"
                            xlinkHref="#piio_1-r"
                          />
                        </g>
                        <path
                          fill="url(#piio_1-s)"
                          fillRule="nonzero"
                          d="M7.50547452,22.2312836 L-1.29529416,35.8879406 L-1.11725194,38.5133505 C9.15455658,28.0800452 14.735328,22.4439452 15.6250623,21.6050503"
                          mask="url(#piio_1-p)"
                          opacity=".463"
                        />
                      </g>
                      <g transform="translate(7.2 9.393)">
                        <mask id="piio_1-u" fill="#fff">
                          <use xlinkHref="#piio_1-t" />
                        </mask>
                        <use
                          fill="#1E5DF1"
                          fillRule="nonzero"
                          xlinkHref="#piio_1-t"
                        />
                        <path
                          fill="#0A3495"
                          fillRule="nonzero"
                          d="M12.1856441,14.0179925 C11.3078252,14.0179925 10.5962123,13.3062733 10.5962123,12.4283232 C10.5962123,11.5503731 11.3078252,10.838654 12.1856441,10.838654 C13.0634631,10.838654 13.775076,11.5503731 13.775076,12.4283232 C13.775076,13.3062733 13.0634631,14.0179925 12.1856441,14.0179925 Z M8.42880524,10.7904822 C7.55098627,10.7904822 6.83937339,10.078763 6.83937339,9.20081294 C6.83937339,8.32286285 7.55098627,7.61114368 8.42880524,7.61114368 C9.30662421,7.61114368 10.0182371,8.32286285 10.0182371,9.20081294 C10.0182371,10.078763 9.30662421,10.7904822 8.42880524,10.7904822 Z M4.40706102,7.56297189 C3.52924206,7.56297189 2.81762918,6.85125272 2.81762918,5.97330264 C2.81762918,5.09535255 3.52924206,4.38363339 4.40706102,4.38363339 C5.28487999,4.38363339 5.99649287,5.09535255 5.99649287,5.97330264 C5.99649287,6.85125272 5.28487999,7.56297189 4.40706102,7.56297189 Z"
                          mask="url(#piio_1-u)"
                        />
                        <polygon
                          fill="url(#piio_1-l)"
                          fillRule="nonzero"
                          points=".01 -.435 24.077 8.469 24.077 1.016 -.626 -3.444"
                          mask="url(#piio_1-u)"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </span>
            <span className="piio_float_right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={188}
                height={190}
                viewBox="0 0 188 190"
              >
                <defs>
                  <rect id="piio_2-b" width="85.862" height="95.846" />
                  <filter
                    id="piio_2-a"
                    width="101.2%"
                    height="102.1%"
                    x="-.6%"
                    y="-.5%"
                    filterUnits="objectBoundingBox"
                  >
                    <feOffset
                      dy={1}
                      in="SourceAlpha"
                      result="shadowOffsetOuter1"
                    />
                    <feColorMatrix
                      in="shadowOffsetOuter1"
                      values="0 0 0 0 0.886431961   0 0 0 0 0.90419334   0 0 0 0 0.921954719  0 0 0 0.318812274 0"
                    />
                  </filter>
                  <linearGradient
                    id="piio_2-d"
                    x1="50%"
                    x2="50%"
                    y1="95.753%"
                    y2="2.614%"
                  >
                    <stop offset="0%" stopColor="#F6F7FA" />
                    <stop offset="100%" stopColor="#D2DFED" />
                  </linearGradient>
                  <rect id="piio_2-c" width="75.13" height="85.197" />
                  <linearGradient
                    id="piio_2-e"
                    x1="40.082%"
                    x2="82.603%"
                    y1="16.088%"
                    y2="88.525%"
                  >
                    <stop offset="2.38%" stopColor="#FDCF5F" />
                    <stop offset="100%" stopColor="#F6A26C" />
                  </linearGradient>
                  <linearGradient
                    id="piio_2-g"
                    x1="40.696%"
                    x2="65.974%"
                    y1="28.503%"
                    y2="70.364%"
                  >
                    <stop offset="0%" stopColor="#266CEB" />
                    <stop offset="100%" stopColor="#0D47AE" />
                  </linearGradient>
                  <linearGradient
                    id="piio_2-h"
                    x1="71.844%"
                    y1="100%"
                    y2="11.27%"
                  >
                    <stop offset="0%" stopColor="#FFC41A" stopOpacity={0} />
                    <stop offset="100%" stopColor="#FFB40B" />
                  </linearGradient>
                  <linearGradient
                    id="piio_2-i"
                    x1="57.718%"
                    x2="95.28%"
                    y1="85.856%"
                    y2="15.039%"
                  >
                    <stop offset="0%" stopColor="#FFC41A" stopOpacity={0} />
                    <stop offset="100%" stopColor="#FF9B57" />
                  </linearGradient>
                  <linearGradient
                    id="piio_2-k"
                    x1="59.912%"
                    x2="4.714%"
                    y1="70.079%"
                    y2="8.822%"
                  >
                    <stop offset="0%" stopColor="#002B8F" />
                    <stop offset="100%" stopColor="#1E5DF1" />
                  </linearGradient>
                  <path
                    id="piio_2-j"
                    d="M0.13644063,1.03642883 C0.406626663,0.399677031 1.14176795,0.102549483 1.77842413,0.372777095 C7.52706808,2.81276602 12.6009814,5.39653866 17.000164,8.12409501 L9.70205826,19.1804321 L0.13644063,4.38363339 C0.0968657773,2.24543038 0.0968657773,1.12969552 0.13644063,1.03642883 Z"
                  />
                  <linearGradient
                    id="piio_2-l"
                    x1="95.866%"
                    x2="11.141%"
                    y1="68.955%"
                    y2="15.186%"
                  >
                    <stop offset="0%" stopColor="#C7D7FF" stopOpacity={0} />
                    <stop offset="100%" stopColor="#91B1FF" />
                  </linearGradient>
                  <linearGradient
                    id="piio_2-o"
                    x1="88.933%"
                    x2="42.442%"
                    y1="8.832%"
                    y2="54.375%"
                  >
                    <stop offset="0%" stopColor="#40ABFF" />
                    <stop offset="36.44%" stopColor="#346FF9" />
                    <stop offset="100%" stopColor="#0E4DE3" />
                  </linearGradient>
                  <path
                    id="piio_2-n"
                    d="M38.337046,10.1568847 L42.8279497,11.7733923 C43.2480365,11.9246032 43.4848195,12.4494845 43.3568195,12.9457475 C43.287748,13.2135414 43.1211677,13.430986 42.902477,13.5388211 L36.5076199,16.692087 C34.3152297,20.165133 27.9202686,28.890327 15.6250623,40.7051672 C15.3756973,40.9447803 14.979331,40.9368524 14.7397488,40.6874548 C14.6114173,40.5538657 14.5488119,40.370303 14.5687666,40.1861248 L14.253607,37.8293548 L13.7588722,34.1297171 L1.68291042,39.1028795 C1.34383871,39.2065498 0.976719107,39.1616042 0.672660792,38.9791969 C0.0795586367,38.6233895 -0.112849882,37.8540745 0.242904338,37.2608838 C3.38225157,31.5219737 5.736762,27.2177911 7.30643561,24.3483361 C9.62387685,20.1119181 13.1000387,13.7572912 17.7349212,5.28445537 C20.3722411,0.949323829 25.7356001,-0.873930043 30.4680424,0.95587834 L31.977309,1.53943933 C32.3342286,1.67744299 32.6829182,1.83585979 33.0216514,2.01390527 C36.1975204,3.68321075 38.1014938,6.82258921 38.337046,10.1568847 Z"
                  />
                  <linearGradient
                    id="piio_2-q"
                    x1="116.987%"
                    x2="31.182%"
                    y1="0%"
                    y2="78.078%"
                  >
                    <stop offset="0%" stopColor="#FFC41A" />
                    <stop offset="100%" stopColor="#FF690B" />
                  </linearGradient>
                  <polygon
                    id="piio_2-r"
                    points="8.453 0 12.637 3.012 15.984 10.333 5.012 17.558 .175 14.403"
                  />
                  <linearGradient
                    id="piio_2-s"
                    x1="26.494%"
                    x2="69.719%"
                    y1="67.071%"
                    y2="6.58%"
                  >
                    <stop offset="0%" stopColor="#00307A" stopOpacity={0} />
                    <stop offset="100%" stopColor="#00307A" />
                  </linearGradient>
                  <path
                    id="piio_2-t"
                    d="M0.00812979003,1.41321237 C0.180151496,0.565852908 1.00642062,0.0184043179 1.85365353,0.190451718 L23.2735681,4.54019172 C24.0805988,11.4867544 21.5636064,15.4657925 15.7225909,16.4773061 C14.7139105,16.6519836 13.2895696,16.653558 11.4495681,16.4820292 L1.15478609,7.54311527 C0.576935077,7.04136977 0.227985686,6.32613707 0.188149672,5.56182515 C0.0489299519,2.89069217 -0.0110766754,1.50782124 0.00812979003,1.41321237 Z"
                  />
                </defs>
                <g fill="none" fillRule="evenodd" transform="translate(0 -52)">
                  <g transform="translate(0 93)">
                    <g fillRule="nonzero">
                      <use
                        fill="#000"
                        filter="url(#piio_2-a)"
                        xlinkHref="#piio_2-b"
                      />
                      <use fill="#FEFEFE" xlinkHref="#piio_2-b" />
                    </g>
                    <g transform="translate(5.366 5.325)">
                      <mask id="piio_2-f" fill="#fff">
                        <use xlinkHref="#piio_2-c" />
                      </mask>
                      <use
                        fill="url(#piio_2-d)"
                        fillRule="nonzero"
                        xlinkHref="#piio_2-c"
                      />
                      <ellipse
                        cx="19.453"
                        cy="17.971"
                        fill="url(#piio_2-e)"
                        fillRule="nonzero"
                        mask="url(#piio_2-f)"
                        rx="8.72"
                        ry="8.653"
                      />
                      <path
                        fill="url(#piio_2-g)"
                        fillRule="nonzero"
                        d="M-2.68319977,86.4882082 C-2.68319977,86.4882082 10.1462703,70.527071 35.8052105,38.6047967 L72.0571429,86.4882082 C22.2302478,86.4882082 -2.68319977,86.4882082 -2.68319977,86.4882082 Z"
                        mask="url(#piio_2-f)"
                      />
                      <path
                        fill="#3B81FE"
                        fillRule="nonzero"
                        d="M17.4407985,94.508964 C17.4407985,94.508964 37.5949622,70.1057088 77.9032895,21.2991982 L134.852437,94.508964 C56.5780112,94.508964 17.4407985,94.508964 17.4407985,94.508964 Z"
                        mask="url(#piio_2-f)"
                      />
                    </g>
                  </g>
                  <g transform="scale(-1 1) rotate(58 -63.45 -113.88)">
                    <g fillRule="nonzero" transform="rotate(-6 282.984 12.909)">
                      <polygon
                        fill="url(#piio_2-h)"
                        points="69.25 .626 74.966 3.638 79.537 10.959 59.685 42.257 .106 42.257"
                        opacity=".502"
                      />
                      <polygon
                        fill="url(#piio_2-i)"
                        points="70.441 .118 74.966 3.638 77.328 9.896 59.685 30.021 27.164 34.881"
                      />
                    </g>
                    <g transform="translate(47.587)">
                      <g transform="translate(15.653)">
                        <mask id="piio_2-m" fill="#fff">
                          <use xlinkHref="#piio_2-j" />
                        </mask>
                        <use
                          fill="url(#piio_2-k)"
                          fillRule="nonzero"
                          xlinkHref="#piio_2-j"
                        />
                        <polygon
                          fill="url(#piio_2-l)"
                          fillRule="nonzero"
                          points="-2.028 .343 17.055 8.843 17.055 .803 -2.953 -4.01"
                          mask="url(#piio_2-m)"
                          transform="rotate(12 7.051 2.417)"
                        />
                      </g>
                      <g transform="translate(11.897 1.879)">
                        <mask id="piio_2-p" fill="#fff">
                          <use xlinkHref="#piio_2-n" />
                        </mask>
                        <use
                          fill="url(#piio_2-o)"
                          fillRule="nonzero"
                          xlinkHref="#piio_2-n"
                        />
                        <g
                          fill="#042E93"
                          fillRule="nonzero"
                          mask="url(#piio_2-p)"
                          opacity=".966"
                        >
                          <path
                            d="M5.72419094,0.65178503 L17.4144502,6.65468155 C18.0539877,6.98308126 18.3085039,7.76614454 17.9842595,8.40779879 C17.6627206,9.04409906 16.8862385,9.29926354 16.2499382,8.9777246 C16.2474471,8.97646579 16.2449601,8.97519889 16.2424772,8.97392394 L4.55221796,2.97102742 C3.91268042,2.64262772 3.65816421,1.85956443 3.98240865,1.21791018 C4.30394758,0.581609914 5.08042968,0.326445436 5.71672995,0.647984369 C5.71922105,0.649243187 5.72170806,0.65051008 5.72419094,0.65178503 Z M3.73172974,4.99646418 L15.421989,10.9993607 C16.0615265,11.3277604 16.3160427,12.1108237 15.9917983,12.7524779 C15.6702594,13.3887782 14.8937773,13.6439427 14.257477,13.3224038 C14.2549859,13.3211449 14.2524989,13.319878 14.250016,13.3186031 L2.55975675,7.31570657 C1.92021921,6.98730687 1.665703,6.20424359 1.98994744,5.56258934 C2.31148638,4.92628907 3.08796847,4.67112459 3.72426874,4.99266352 C3.72675984,4.99392234 3.72924685,4.99518923 3.73172974,4.99646418 Z M2.53843854,9.74430435 L14.2286978,15.7472009 C14.8682353,16.0756006 15.1227515,16.8586639 14.7985071,17.5003181 C14.4769682,18.1366184 13.7004861,18.3917829 13.0641858,18.0702439 C13.0616947,18.0689851 13.0592077,18.0677182 13.0567248,18.0664433 L1.36646556,12.0635467 C0.726928015,11.735147 0.472411809,10.9520838 0.796656247,10.3104295 C1.11819518,9.67412924 1.89467727,9.41896476 2.53097754,9.74050369 C2.53346864,9.74176251 2.53595566,9.7430294 2.53843854,9.74430435 Z"
                            transform="rotate(8 -100.715 157.015)"
                          />
                        </g>
                        <ellipse
                          cx="28.02"
                          cy="9.237"
                          fill="#FFF"
                          fillRule="nonzero"
                          mask="url(#piio_2-p)"
                          rx="2.035"
                          ry="2.035"
                        />
                        <g mask="url(#piio_2-p)">
                          <use
                            fill="url(#piio_2-q)"
                            fillRule="nonzero"
                            transform="translate(-2.191 23.797)"
                            xlinkHref="#piio_2-r"
                          />
                        </g>
                        <path
                          fill="url(#piio_2-s)"
                          fillRule="nonzero"
                          d="M7.50547452,22.2312836 L-1.29529416,35.8879406 L-1.11725194,38.5133505 C9.15455658,28.0800452 14.735328,22.4439452 15.6250623,21.6050503"
                          mask="url(#piio_2-p)"
                          opacity=".463"
                        />
                      </g>
                      <g transform="translate(7.2 9.393)">
                        <mask id="piio_2-u" fill="#fff">
                          <use xlinkHref="#piio_2-t" />
                        </mask>
                        <use
                          fill="#1E5DF1"
                          fillRule="nonzero"
                          xlinkHref="#piio_2-t"
                        />
                        <path
                          fill="#0A3495"
                          fillRule="nonzero"
                          d="M12.1856441,14.0179925 C11.3078252,14.0179925 10.5962123,13.3062733 10.5962123,12.4283232 C10.5962123,11.5503731 11.3078252,10.838654 12.1856441,10.838654 C13.0634631,10.838654 13.775076,11.5503731 13.775076,12.4283232 C13.775076,13.3062733 13.0634631,14.0179925 12.1856441,14.0179925 Z M8.42880524,10.7904822 C7.55098627,10.7904822 6.83937339,10.078763 6.83937339,9.20081294 C6.83937339,8.32286285 7.55098627,7.61114368 8.42880524,7.61114368 C9.30662421,7.61114368 10.0182371,8.32286285 10.0182371,9.20081294 C10.0182371,10.078763 9.30662421,10.7904822 8.42880524,10.7904822 Z M4.40706102,7.56297189 C3.52924206,7.56297189 2.81762918,6.85125272 2.81762918,5.97330264 C2.81762918,5.09535255 3.52924206,4.38363339 4.40706102,4.38363339 C5.28487999,4.38363339 5.99649287,5.09535255 5.99649287,5.97330264 C5.99649287,6.85125272 5.28487999,7.56297189 4.40706102,7.56297189 Z"
                          mask="url(#piio_2-u)"
                        />
                        <polygon
                          fill="url(#piio_2-l)"
                          fillRule="nonzero"
                          points=".01 -.435 24.077 8.469 24.077 1.016 -.626 -3.444"
                          mask="url(#piio_2-u)"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </span>
          </div>
          <svg
            className="illustration_1 big_svg"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http:/ /www.w3.org/1999/xlink"
            width={791}
            height={431}
            viewBox="0 0 791 431"
          >
            <defs>
              <linearGradient
                id="illustration_1_home-b"
                x1="51.172%"
                x2="51.172%"
                y1="98.556%"
                y2="1.867%"
              >
                <stop offset="0%" stopColor="#0D3AA2" />
                <stop offset="88.446%" stopColor="#0132A5" />
                <stop offset="100%" stopColor="#1454EB" />
              </linearGradient>
              <polygon
                id="illustration_1_home-c"
                points="0 0 214 0 214 320 0 320"
              />
              <rect id="illustration_1_home-e" width={85} height={94} />
              <rect id="illustration_1_home-g" width={85} height={94} />
              <rect id="illustration_1_home-i" width={85} height={94} />
              <rect id="illustration_1_home-k" width={85} height={94} />
              <rect id="illustration_1_home-m" width={85} height={94} />
              <rect
                id="illustration_1_home-a"
                width={85}
                height={94}
                x={132}
                y={67}
              />
              <filter
                id="illustration_1_home-o"
                width="241.2%"
                height="227.7%"
                x="-70.6%"
                y="-63.8%"
                filterUnits="objectBoundingBox"
              >
                <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
                <feGaussianBlur
                  in="shadowOffsetOuter1"
                  result="shadowBlurOuter1"
                  stdDeviation={20}
                />
                <feComposite
                  in="shadowBlurOuter1"
                  in2="SourceAlpha"
                  operator="out"
                  result="shadowBlurOuter1"
                />
                <feColorMatrix
                  in="shadowBlurOuter1"
                  values="0 0 0 0 0.231372549   0 0 0 0 0.505882353   0 0 0 0 0.996078431  0 0 0 0.309159873 0"
                />
              </filter>
              <filter
                id="illustration_1_home-p"
                width="241.2%"
                height="227.7%"
                x="-70.6%"
                y="-63.8%"
                filterUnits="objectBoundingBox"
              >
                <feGaussianBlur
                  in="SourceAlpha"
                  result="shadowBlurInner1"
                  stdDeviation={20}
                />
                <feOffset in="shadowBlurInner1" result="shadowOffsetInner1" />
                <feComposite
                  in="shadowOffsetInner1"
                  in2="SourceAlpha"
                  k2={-1}
                  k3={1}
                  operator="arithmetic"
                  result="shadowInnerInner1"
                />
                <feColorMatrix
                  in="shadowInnerInner1"
                  values="0 0 0 0 0.231372549   0 0 0 0 0.505882353   0 0 0 0 0.996078431  0 0 0 0.6 0"
                />
              </filter>
              <mask
                id="illustration_1_home-q"
                width={85}
                height={94}
                x={0}
                y={0}
                fill="#fff"
              >
                <use xlinkHref="#illustration_1_home-a" />
              </mask>
              <linearGradient
                id="illustration_1_home-r"
                x1="0%"
                x2="96.194%"
                y1="50%"
                y2="50%"
              >
                <stop offset="2.134%" />
                <stop offset="96.791%" stopOpacity={0} />
              </linearGradient>
              <rect
                id="illustration_1_home-s"
                width="59.176"
                height="37.957"
                x=".294"
                y=".083"
                rx="3.3"
              />
              <linearGradient
                id="illustration_1_home-t"
                x1="50%"
                x2="50%"
                y1="64.181%"
                y2="0%"
              >
                <stop offset="0%" stopOpacity={0} />
                <stop offset="100%" />
              </linearGradient>
              <polygon
                id="illustration_1_home-v"
                points=".248 .237 7.815 63.89 1.563 136.367 12.208 136.367 25.799 65.824 28.296 23.335 46.011 .667"
              />
              <path
                id="illustration_1_home-x"
                d="M52.2955911,3.19189794 C44.5875911,1.35189794 20.4997153,-2.3719229 11.0970486,3.71534983 C1.6907375,9.80625892 0.666648611,18.8898953 0.440693056,22.3735316 C-0.266329167,33.1662589 0.672035556,41.5989091 1.16403556,52.4098182 C1.41185778,57.9189091 1.82003556,63.4170909 2.38492444,68.9007273 C2.67648,71.7370909 3.01176889,74.5698182 3.39079111,77.3952727 C3.51834667,78.348 3.86092444,84.988 4.55701333,85.2898182 C13.4786133,89.1698182 50.5353244,88.5116364 52.2955911,81.6425455 C57.1317689,62.7516364 55.1495271,45.1141349 59.6030382,26.085044 C61.1142678,19.6220137 58.6784521,11.990965 52.2955911,3.19189794 Z"
              />
              <path
                id="illustration_1_home-z"
                d="M33.4668319,47.0802819 C33.8858932,47.0802819 34.1701261,46.653339 34.0134336,46.259521 L31.9071948,40.9484985 C31.1055122,38.9278808 26.8044823,38.0463981 24.7091755,37.5458443 L14.418134,34.2188893 L16.8655647,0 L0,0 L2.05180638,46.5907698 C2.06273841,46.9146575 2.32510726,47.1686149 2.6457803,47.1686149 L33.4668319,47.0802819 Z"
              />
              <path
                id="illustration_1_home-B"
                d="M34.0498805,50.9418555 C34.4689623,50.9421478 34.7529142,50.5154238 34.5959421,50.1215155 L32.4859324,44.8092802 C31.6828151,42.7882008 29.9580763,41.2854097 27.8623216,40.7834185 L14.5150905,37.5758728 L18.2149737,1.4023716 L1.74698415,1.33834444 L2.63298447,50.4304521 C2.64414074,50.7543318 2.90669779,51.00846 3.22738647,51.0086837 L34.0498805,50.9418555 Z"
              />
              <path
                id="illustration_1_home-D"
                d="M45.8099253,3.13650667 C38.1028404,0.982112586 19.0308459,-4.05350865 9.97092442,7.00379202 C0.911002943,18.0610927 17.463843,39.301624 10.8819274,57.7956565 C0.911002943,85.8122112 -0.240504777,97.9373985 0.455501472,98.2907873 C9.37604229,102.833749 51.8958293,104.150844 53.6558869,96.1080563 C55.7634133,86.4679351 47.4318693,71.3320352 48.0465087,61.9930627 C48.8421259,49.9042746 54.9042144,42.0065285 57.4164302,29.4366423 C59.6830056,18.0856252 53.5170102,5.29090076 45.8099253,3.13650667 Z"
              />
              <linearGradient
                id="illustration_1_home-F"
                x1="2.201%"
                x2="116.991%"
                y1="50%"
                y2="50%"
              >
                <stop offset="0%" stopColor="#152E4D" stopOpacity=".128" />
                <stop offset="100%" stopColor="#15264D" stopOpacity={0} />
              </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd" transform="translate(-26)">
              <g transform="translate(306)">
                <path
                  fill="url(#illustration_1_home-b)"
                  fillRule="nonzero"
                  d="M5,0 L249,0 C251.761424,-5.07265313e-16 254,2.23857625 254,5 L254,401 C254,403.761424 251.761424,406 249,406 L5,406 C2.23857625,406 3.38176876e-16,403.761424 0,401 L0,5 C-3.38176876e-16,2.23857625 2.23857625,5.07265313e-16 5,0 Z"
                />
                <circle
                  cx="127.5"
                  cy="374.5"
                  r="19.5"
                  fill="#001955"
                  fillRule="nonzero"
                  opacity=".39"
                />
                <g transform="translate(20 24)">
                  <mask id="illustration_1_home-d" fill="#fff">
                    <use xlinkHref="#illustration_1_home-c" />
                  </mask>
                  <use
                    fill="#00267E"
                    fillRule="nonzero"
                    xlinkHref="#illustration_1_home-c"
                  />
                  <g mask="url(#illustration_1_home-d)">
                    <g transform="translate(16 13)">
                      <g transform="translate(0 239)">
                        <mask id="illustration_1_home-f" fill="#fff">
                          <use xlinkHref="#illustration_1_home-e" />
                        </mask>
                        <use
                          fill="#00298F"
                          fillRule="nonzero"
                          xlinkHref="#illustration_1_home-e"
                        />
                        <circle
                          cx="19.5"
                          cy="17.5"
                          r="8.5"
                          fill="#0936A7"
                          fillRule="nonzero"
                          mask="url(#illustration_1_home-f)"
                        />
                        <path
                          fill="#002F9C"
                          fillRule="nonzero"
                          d="M-19 95C-19 95-8.18580534 82 13.442584 56L44 95C2 95-19 95-19 95zM44 95C44 95 54.8141947 82 76.442584 56L107 95C65 95 44 95 44 95z"
                          mask="url(#illustration_1_home-f)"
                        />
                        <path
                          fill="#0936A7"
                          fillRule="nonzero"
                          d="M-2,103 C-2,103 14.9937345,82.6666667 48.9812034,42 L97,103 C31,103 -2,103 -2,103 Z"
                          mask="url(#illustration_1_home-f)"
                        />
                      </g>
                      <g transform="translate(0 133)">
                        <mask id="illustration_1_home-h" fill="#fff">
                          <use xlinkHref="#illustration_1_home-g" />
                        </mask>
                        <use
                          fill="#00298F"
                          fillRule="nonzero"
                          xlinkHref="#illustration_1_home-g"
                        />
                        <circle
                          cx="19.5"
                          cy="17.5"
                          r="8.5"
                          fill="#0936A7"
                          fillRule="nonzero"
                          mask="url(#illustration_1_home-h)"
                        />
                        <path
                          fill="#002F9C"
                          fillRule="nonzero"
                          d="M-3,95 C-3,95 11.5905801,79.3333333 40.7717403,48 L82,95 C25.3333333,95 -3,95 -3,95 Z"
                          mask="url(#illustration_1_home-h)"
                        />
                        <path
                          fill="#0936A7"
                          fillRule="nonzero"
                          d="M20,103 C20,103 42.8299665,79 88.4898995,31 L153,103 C64.3333333,103 20,103 20,103 Z"
                          mask="url(#illustration_1_home-h)"
                        />
                      </g>
                      <g transform="translate(96 133)">
                        <mask id="illustration_1_home-j" fill="#fff">
                          <use xlinkHref="#illustration_1_home-i" />
                        </mask>
                        <use
                          fill="#00298F"
                          fillRule="nonzero"
                          xlinkHref="#illustration_1_home-i"
                        />
                        <circle
                          cx="19.5"
                          cy="17.5"
                          r="8.5"
                          fill="#0936A7"
                          fillRule="nonzero"
                          mask="url(#illustration_1_home-j)"
                        />
                        <path
                          fill="#002F9C"
                          fillRule="nonzero"
                          d="M-19 95C-19 95-8.18580534 82 13.442584 56L44 95C2 95-19 95-19 95zM44 95C44 95 54.8141947 82 76.442584 56L107 95C65 95 44 95 44 95z"
                          mask="url(#illustration_1_home-j)"
                        />
                        <path
                          fill="#0936A7"
                          fillRule="nonzero"
                          d="M-2,103 C-2,103 14.9937345,82.6666667 48.9812034,42 L97,103 C31,103 -2,103 -2,103 Z"
                          mask="url(#illustration_1_home-j)"
                        />
                      </g>
                      <g transform="translate(96 239)">
                        <mask id="illustration_1_home-l" fill="#fff">
                          <use xlinkHref="#illustration_1_home-k" />
                        </mask>
                        <use
                          fill="#00298F"
                          fillRule="nonzero"
                          xlinkHref="#illustration_1_home-k"
                        />
                        <circle
                          cx="19.5"
                          cy="17.5"
                          r="8.5"
                          fill="#0936A7"
                          fillRule="nonzero"
                          mask="url(#illustration_1_home-l)"
                        />
                        <path
                          fill="#002F9C"
                          fillRule="nonzero"
                          d="M-3,95 C-3,95 11.5905801,79.3333333 40.7717403,48 L82,95 C25.3333333,95 -3,95 -3,95 Z"
                          mask="url(#illustration_1_home-l)"
                        />
                        <path
                          fill="#0936A7"
                          fillRule="nonzero"
                          d="M20,103 C20,103 42.8299665,79 88.4898995,31 L153,103 C64.3333333,103 20,103 20,103 Z"
                          mask="url(#illustration_1_home-l)"
                        />
                      </g>
                      <g transform="translate(0 30)">
                        <mask id="illustration_1_home-n" fill="#fff">
                          <use xlinkHref="#illustration_1_home-m" />
                        </mask>
                        <use
                          fill="#00298F"
                          fillRule="nonzero"
                          xlinkHref="#illustration_1_home-m"
                        />
                        <circle
                          cx="19.5"
                          cy="17.5"
                          r="8.5"
                          fill="#0936A7"
                          fillRule="nonzero"
                          mask="url(#illustration_1_home-n)"
                        />
                        <path
                          fill="#002F9C"
                          fillRule="nonzero"
                          d="M-19 95C-19 95-8.18580534 82 13.442584 56L44 95C2 95-19 95-19 95zM44 95C44 95 54.8141947 82 76.442584 56L107 95C65 95 44 95 44 95z"
                          mask="url(#illustration_1_home-n)"
                        />
                        <path
                          fill="#0936A7"
                          fillRule="nonzero"
                          d="M-2,103 C-2,103 14.9937345,82.6666667 48.9812034,42 L97,103 C31,103 -2,103 -2,103 Z"
                          mask="url(#illustration_1_home-n)"
                        />
                      </g>
                      <polygon
                        fill="#00298F"
                        fillRule="nonzero"
                        points="1 0 181 0 181 21 1 21"
                      />
                    </g>
                  </g>
                </g>
                <g fillRule="nonzero" strokeDasharray="4 4">
                  <use
                    fill="#000"
                    filter="url(#illustration_1_home-o)"
                    xlinkHref="#illustration_1_home-a"
                  />
                  <use
                    fill="#000"
                    fillOpacity={0}
                    xlinkHref="#illustration_1_home-a"
                  />
                  <use
                    fill="#000"
                    filter="url(#illustration_1_home-p)"
                    xlinkHref="#illustration_1_home-a"
                  />
                  <use
                    stroke="#518FFF"
                    strokeWidth={4}
                    mask="url(#illustration_1_home-q)"
                    xlinkHref="#illustration_1_home-a"
                  />
                </g>
              </g>
              <g className="guy_pointing" transform="translate(0 119)">
                <polyline
                  fill="url(#illustration_1_home-r)"
                  fillRule="nonzero"
                  points="268 310 22.514 301 0 310"
                  opacity=".104"
                  transform="matrix(-1 0 0 1 268 0)"
                />
                <g transform="translate(160)">
                  <g transform="rotate(67 -27.58 86.068)">
                    <g transform="translate(15.489 29.203)">
                      <path
                        fill="#F5AF95"
                        d="M-4.54747351e-13,10.3781818 L11.8225778,1.81818182 L19.0677333,19.2072727 L50.0309333,28.1345455 L53.3400889,29.3672727 L63.8032889,33.9309091 C64.4629333,34.0909091 64.5540444,34.9963636 63.9344889,35.28 L56.6747556,37.2436364 C55.8729778,37.44 55.0238222,37.3490909 54.2803556,36.9854545 L48.9813333,34.3818182 L17.1485752,27.5639733 C15.6931614,27.2522571 14.2827787,26.759274 12.9505799,26.096612 L11.2504,25.2509091 C8.83297774,24.0484356 6.82351072,22.1629302 5.4722641,19.8292192 L-4.54747351e-13,10.3781818 Z"
                      />
                      <g transform="rotate(-84 50.648 10.069)">
                        <rect
                          width="59.176"
                          height="39.456"
                          x=".076"
                          y=".563"
                          fill="#95A0AB"
                          fillRule="nonzero"
                          rx="3.3"
                        />
                        <mask id="illustration_1_home-u" fill="#fff">
                          <use xlinkHref="#illustration_1_home-s" />
                        </mask>
                        <use
                          fill="#BCCBD7"
                          fillRule="nonzero"
                          xlinkHref="#illustration_1_home-s"
                        />
                        <polygon
                          fill="url(#illustration_1_home-t)"
                          fillRule="nonzero"
                          points="42.978 -3.847 54.661 -.072 45.755 38.418"
                          mask="url(#illustration_1_home-u)"
                          opacity=".2"
                        />
                        <path
                          fill="#646E79"
                          fillOpacity=".236"
                          fillRule="nonzero"
                          d="M30.1421634,23.0925563 C32.2194193,23.0925563 33.8028869,21.9721195 33.8028869,19.8830349 C33.8028869,17.7939503 32.1189383,16.1004126 30.0416824,16.1004126 C27.9644265,16.1004126 26.2804779,17.7939503 26.2804779,19.8830349 C26.2804779,21.9721195 28.0649075,23.0925563 30.1421634,23.0925563 Z"
                        />
                      </g>
                    </g>
                    <path
                      fill="#E4A146"
                      fillRule="nonzero"
                      d="M4.45635094,22.1781314 C2.17307878,17.5191154 0.877035945,12.4404211 0.649159038,7.25920785 L0.333867511,0.0904576128 C0.333867511,0.0904576128 11.8929156,3.93272727 16.3063378,10.5763636 L28.6610044,30.6272727 L13.96296,41.5763636 L4.45635094,22.1781314 Z"
                    />
                  </g>
                  <g transform="translate(45.556 7.273)">
                    <g transform="translate(17.311 26.818)">
                      <path
                        fill="#F5AF95"
                        d="M11.6148444,51.8509091 C7.71528889,51.8509091 4.55555556,48.6981818 4.55555556,44.8072727 L4.55555556,32.9527273 C4.55555556,29.0618182 7.71528889,25.9090909 11.6148444,25.9090909 C15.5144,25.9090909 18.6741333,29.0618182 18.6741333,32.9527273 L18.6741333,44.8072727 C18.6741333,48.6981818 15.5144,51.8509091 11.6148444,51.8509091"
                      />
                      <path
                        fill="#F5AF95"
                        d="M23.4450955,12.6598011 L26.2794162,12.6598011 L27.6576497,22.7272727 C27.0101629,31.12 25.9976195,35.3624242 24.6200195,35.4545455 L15.213954,40.0399503 L6.28083556,34.2061818 L4.14154667,16.4134545 L23.4450955,12.6598011 Z"
                      />
                      <path
                        fill="#FFF"
                        d="M19.3717882,19.831321 L18.750293,23.5626776 L16.1270311,33.6363636 L16.1270311,37.8970909 L4.70898667,37.7083636 C2.41353666,29.1236686 0.996684565,23.1646544 0.458430367,19.831321 C-0.348950928,14.831321 2.83531172,8.99939002 7.04100061,7.38484456 C8.41495617,6.85757183 16.806605,1.43268622 18.750293,0.871882415 C32.8,-3.18181818 27.920128,10.7053445 26.0810004,14.8464134"
                      />
                      <path
                        fill="#F5AF95"
                        d="M18.6575898,26.2355858 C18.7614632,27.8537677 18.1401824,29.3228586 17.2680374,29.5155858 C16.3958924,29.7083131 15.6060623,28.5555858 15.5002289,26.937404 C15.3963555,25.3192222 16.0176363,23.8501313 16.8897813,23.657404 C17.7619263,23.4646768 18.5537163,24.617404 18.6575898,26.2355858"
                      />
                    </g>
                    <g transform="translate(4.1 151.818)">
                      <mask id="illustration_1_home-w" fill="#fff">
                        <use xlinkHref="#illustration_1_home-v" />
                      </mask>
                      <use
                        fill="#0E4DE3"
                        fillRule="nonzero"
                        xlinkHref="#illustration_1_home-v"
                      />
                      <polygon
                        fill="url(#illustration_1_home-t)"
                        fillRule="nonzero"
                        points="23.807 71.655 17.311 19.241 36.84 13.636"
                        mask="url(#illustration_1_home-w)"
                        opacity=".334"
                      />
                      <polygon
                        fill="#0E4DE3"
                        fillRule="nonzero"
                        points="47.626 .237 53.779 65.662 47.626 136.243 36.767 136.243 36.311 67.727 25.92 25.455 3.893 7.509"
                      />
                      <polygon
                        fill="#001955"
                        fillRule="nonzero"
                        points="10.496 14.133 10.915 13.594 26.267 25.482 27.9 31.66 27.24 31.834 25.665 25.879"
                      />
                    </g>
                    <path
                      fill="#0E3693"
                      fillRule="nonzero"
                      d="M41.2259556,302.650909 L72.0506667,302.563636 C72.4697778,302.563636 72.7540444,302.141818 72.5973333,301.752727 L70.4908444,296.505455 C69.6890667,294.509091 67.9652444,293.025455 65.8696889,292.530909 L52.5237333,289.370909 L52.1957333,286.818182 L40.0888889,287.032727 L40.6319111,302.08 C40.6428444,302.4 40.9052444,302.650909 41.2259556,302.650909"
                    />
                    <path
                      fill="#0E3693"
                      fillRule="nonzero"
                      d="M5.69145741,302.653329 L36.5158494,302.5613 C36.934956,302.561235 37.2192849,302.139368 37.0626356,301.750297 L34.9569809,296.503293 C34.1555204,294.507031 32.4319462,293.023645 30.3364898,292.529418 L16.9911669,289.371443 L16.6635651,286.818738 L4.55681815,287.035154 L5.09750765,302.082506 C5.10839139,302.402508 5.37074976,302.653379 5.69145741,302.653329"
                      transform="rotate(4 20.832 294.736)"
                    />
                    <g transform="translate(0 69.09)">
                      <mask id="illustration_1_home-y" fill="#fff">
                        <use xlinkHref="#illustration_1_home-x" />
                      </mask>
                      <use
                        fill="#FDBC65"
                        fillRule="nonzero"
                        xlinkHref="#illustration_1_home-x"
                      />
                      <polygon
                        fill="url(#illustration_1_home-t)"
                        fillRule="nonzero"
                        points="53.658 45 52.297 26.747 60.902 20.276 56.194 65.786"
                        mask="url(#illustration_1_home-y)"
                        opacity=".33"
                      />
                    </g>
                    <g transform="rotate(-38 109.808 -6.396)">
                      <path
                        fill="#F5AF95"
                        d="M24.083988,36.1713609 L51.8106559,34.9667348 C54.3514403,34.7078293 56.8315694,34.0218978 59.1432115,32.9425644 L71.4933111,27.162583 C73.2759039,26.3287055 74.9405558,25.2661842 76.4501996,24.0019184 L93.5388644,9.50001934 C93.5388644,9.50001934 97.4477636,10.8550702 98.6777189,10.1590515 C99.5942884,9.64124053 104.372721,3.40895007 106.748389,1.42512864 C107.183085,1.06198844 106.910136,0.352520103 106.34065,0.372694558 L96.743227,0.672516174 C96.1265645,0.692690629 93.0435125,3.17196522 92.490875,3.44768277 L58.1356591,19.8695174 C54.6816749,21.5977958 50.84691,22.4148612 46.988557,22.2467408 L25.1681377,22.5678822 L24.083988,36.1713609 Z"
                      />
                      <polyline
                        fill="#FDBC65"
                        fillRule="nonzero"
                        points="10.705 18.185 27.039 20.154 26.282 37.427 .956 38.911"
                      />
                      <path
                        fill="#001955"
                        fillRule="nonzero"
                        d="M11.443215,38.2535639 L11.48556,39.0651891 C8.35606415,39.2964159 4.65550927,39.3147147 0.383103094,39.120405 L0.409199408,38.3078102 C4.66023578,38.501148 8.33850504,38.4829594 11.443215,38.2535639 Z"
                      />
                    </g>
                    <polygon
                      fill="#FFF"
                      fillRule="nonzero"
                      points="4.137 283.011 5.432 286.596 17.198 286.596 18.629 283.81"
                    />
                    <polygon
                      fill="#FFF"
                      fillRule="nonzero"
                      points="39.902 283.92 39.447 288.061 52.615 288.061 53.448 283.81"
                    />
                  </g>
                </g>
              </g>
              <g className="girl_mobile" transform="translate(535 115)">
                <polyline
                  fill="url(#illustration_1_home-r)"
                  fillRule="nonzero"
                  points="246 315.469 67.382 306 51 315.469"
                  opacity=".104"
                />
                <g transform="matrix(-1 0 0 1 164 0)">
                  <g transform="translate(126.174 80.052)">
                    <polygon
                      fill="#95A0AB"
                      fillRule="nonzero"
                      points="10.112 1.559 30.799 .106 32.324 1.875 21.265 37.976 3.236 31.649 .335 29.73"
                    />
                    <polygon
                      fill="#C5CDD4"
                      fillRule="nonzero"
                      points="8.687 .106 31.085 .106 19.542 36.52 .09 29.759"
                    />
                    <polygon
                      fill="#F4F8FB"
                      fillRule="nonzero"
                      points="9.904 3.327 27.891 3.308 18.384 33.281 2.823 27.734"
                    />
                    <path
                      fill="#CAD3DA"
                      fillRule="nonzero"
                      d="M12.1170725,5.52081341 L20.4353442,5.52081341 C20.7375755,5.52081341 20.9825824,5.76582028 20.9825824,6.06805157 C20.9825824,6.14081117 20.9680728,6.21284027 20.9399026,6.27992526 L20.9399026,6.27992526 C20.7467766,6.73983758 20.2966287,7.0390371 19.7978131,7.0390371 L11.4795414,7.0390371 C11.1773101,7.0390371 10.9323032,6.79403023 10.9323032,6.49179894 C10.9323032,6.41903935 10.9468127,6.34701024 10.974983,6.27992526 L10.974983,6.27992526 C11.168109,5.82001293 11.6182569,5.52081341 12.1170725,5.52081341 Z"
                    />
                    <path
                      fill="#CAD3DA"
                      fillRule="nonzero"
                      d="M23.6505226,5.52081341 L24.4128327,5.52081341 C24.7953728,5.52081341 25.1054828,5.83092342 25.1054828,6.21346349 C25.1054828,6.23565582 25.1044163,6.25783533 25.1022868,6.27992526 L25.1022868,6.27992526 C25.0607839,6.71046449 24.6990145,7.0390371 24.2664795,7.0390371 L23.5041694,7.0390371 C23.1216293,7.0390371 22.8115193,6.7289271 22.8115193,6.34638702 C22.8115193,6.32419469 22.8125859,6.30201519 22.8147153,6.27992526 L22.8147153,6.27992526 C22.8562183,5.84938603 23.2179876,5.52081341 23.6505226,5.52081341 Z"
                      transform="matrix(-1 0 0 1 47.917 0)"
                    />
                    <polygon
                      fill="#356FF8"
                      fillRule="nonzero"
                      points="6.251 25.324 5.922 24.589 8.897 23.164 11.024 25.589 15.11 22.368 16.483 24.625 19.552 22.083 20.042 22.716 16.288 25.826 14.904 23.55 10.927 26.684 8.704 24.15"
                      transform="scale(-1 1) rotate(-21 0 94.427)"
                    />
                    <g fillRule="nonzero" transform="translate(8.199 8.281)">
                      <polygon
                        fill="#0CB78C"
                        fillOpacity=".554"
                        points="8.885 5.287 11.925 4.915 12.019 10.226 8.98 10.733"
                        transform="rotate(15 10.452 7.824)"
                      />
                      <polygon
                        fill="#17C69A"
                        points="5.001 3.099 8.039 2.589 8.162 9.595 5.124 10.105"
                        transform="rotate(15 6.582 6.347)"
                      />
                      <polygon
                        fill="#06A57D"
                        points="1.135 .906 4.17 .259 4.304 9.107 1.288 9.606"
                        transform="rotate(15 2.72 4.932)"
                      />
                    </g>
                  </g>
                  <g transform="translate(42.817 63.49)">
                    <path
                      fill="#001955"
                      fillRule="nonzero"
                      d="M51.264322,97.7739736 C53.6607483,113.670241 55.2296669,125.608596 55.9710778,133.589038 C56.7124887,141.56948 57.1942729,151.7046 57.4164302,163.994397 L51.264322,235.4325 L40.4061833,235.4325 C39.3308048,218.282253 38.7649866,205.424617 38.7087286,196.85959 C38.6524706,188.294564 39.066455,178.036191 39.9506818,166.08447 C34.038585,154.366045 29.9464856,145.496112 27.6743834,139.474671 C25.4022811,133.45323 24.0031562,127.770524 23.4770085,122.426553 L7.53618075,105.135058 L51.264322,97.7739736 Z"
                    />
                    <path
                      fill="#001955"
                      fillRule="nonzero"
                      d="M3.89216897,97.7739736 C1.41488786,104.388523 0.696957757,112.129807 1.73837866,120.997827 C2.77979957,129.865847 6.01972632,143.600141 11.4581589,162.200709 C9.66093279,173.4961 8.3598528,183.866842 7.55491894,193.312935 C6.74998508,202.759028 5.96738135,216.840816 5.20710778,235.5583 L15.8509174,235.5583 L29.4403412,164.157936 L27.8594308,118.67772 L49.6496604,98.2099354 L3.89216897,97.7739736 Z"
                    />
                    <g transform="translate(38.262 202.89)">
                      <mask id="illustration_1_home-A" fill="#fff">
                        <use xlinkHref="#illustration_1_home-z" />
                      </mask>
                      <use
                        fill="#0E4DE3"
                        fillRule="nonzero"
                        xlinkHref="#illustration_1_home-z"
                      />
                      <polygon
                        fill="#001750"
                        fillRule="nonzero"
                        points="1.387 44.936 36.917 44.943 36.917 47.703 1.388 47.697"
                        mask="url(#illustration_1_home-A)"
                        transform="rotate(1 19.152 46.32)"
                      />
                    </g>
                    <g transform="rotate(-12 158.771 -58.878)">
                      <path
                        fill="#F5AF95"
                        d="M59.7066252,12.1738856 L65.2167692,11.2630643 C71.3193175,11.5461164 74.62814,11.6876424 75.1432366,11.6876424 C75.9158815,11.6876424 74.9093758,13.1178602 73.0893965,13.6193516 C71.8760769,13.9536792 70.7296967,14.1834479 69.650256,14.3086579 C66.7054938,18.8776935 63.6758463,20.1642418 60.5613133,18.1683026 C57.4467803,16.1723635 55.0242332,14.7165917 53.2936722,13.8009872 L59.7066252,12.1738856 Z"
                      />
                      <path
                        fill="#0D3BA5"
                        fillRule="nonzero"
                        d="M7.09041986,0.203731189 C17.8570542,4.9665105 26.9738636,8.1494339 34.440848,9.75250138 C41.9078325,11.3555689 50.4137415,11.9054535 59.958575,11.4021553 L59.9173269,15.3362766 C59.8929532,17.6609661 58.1658044,19.6153398 55.8617564,19.925401 L31.1993118,23.2442841 C16.6494286,22.2473794 6.24965797,19.1417656 3.72324394e-12,13.9274426"
                      />
                    </g>
                    <g transform="translate(3.189 199.21)">
                      <mask id="illustration_1_home-C" fill="#fff">
                        <use xlinkHref="#illustration_1_home-B" />
                      </mask>
                      <use
                        fill="#0E4DE3"
                        fillRule="nonzero"
                        transform="rotate(4 18.193 26.174)"
                        xlinkHref="#illustration_1_home-B"
                      />
                      <polygon
                        fill="#001750"
                        fillRule="nonzero"
                        points="-.411 49.189 34.211 49.225 34.214 51.985 -.408 51.949"
                        mask="url(#illustration_1_home-C)"
                        transform="rotate(6 16.902 50.587)"
                      />
                    </g>
                    <g transform="translate(0 13.342)">
                      <mask id="illustration_1_home-E" fill="#fff">
                        <use xlinkHref="#illustration_1_home-D" />
                      </mask>
                      <use
                        fill="#0E4DE3"
                        fillRule="nonzero"
                        xlinkHref="#illustration_1_home-D"
                      />
                      <path
                        fill="url(#illustration_1_home-t)"
                        fillRule="nonzero"
                        d="M46.9124257,37.7255583 C45.0960543,50.5663013 45.0960543,59.2026511 46.9124257,63.6346077 C48.7287972,68.0665643 51.65575,72.4340185 55.6932842,76.7369702 L56.880079,47.8664285 L46.9124257,37.7255583 Z"
                        mask="url(#illustration_1_home-E)"
                        opacity=".243"
                      />
                      <polygon
                        fill="#001955"
                        fillOpacity=".787"
                        points="53.196 46.007 51.836 27.532 60.44 20.983 55.732 67.045"
                        mask="url(#illustration_1_home-E)"
                        opacity=".239"
                      />
                    </g>
                    <g transform="rotate(60 43.04 75.22)">
                      <path
                        fill="#F5AF95"
                        d="M15.9425515,59.808812 L38.689725,57.0885686 C41.2302078,56.8265176 45.5299613,56.6282181 47.926841,54.6066076 C49.9055237,52.9377188 51.4310496,37.8251708 52.2041802,10.9963175 C52.2313951,10.0519195 52.1873808,8.80951864 52.0721373,7.26911487 C52.1533963,5.60076863 51.1347185,3.68447286 49.8388035,2.58971212 C47.3018316,0.446533727 43.5828911,0.0241621712 44.1371998,0.77508628 C44.9746559,1.90959126 47.0656877,3.36550823 46.1186969,7.44764037 C45.6191049,9.60119907 42.6531166,6.84950891 42.1275036,8.33062309 C41.764785,9.35272041 45.8820431,13.0962442 45.7347509,13.1706317 C44.3238642,34.9522734 42.3324559,45.7863733 39.7605259,45.6729313 L16.3536111,43.1736794 L15.9425515,59.808812 Z"
                      />
                      <path
                        fill="#0E4DE3"
                        fillRule="nonzero"
                        d="M0.266851066,40.4996615 C10.9673776,41.2429645 16.9330583,42.5843671 21.7929519,43.128944 C23.9977257,43.3760006 33.0485452,44.9747772 37.759443,42.8571571 C39.6514251,42.0066824 43.4481381,29.7906887 45.5022835,16.1353575 C49.739672,16.4473329 52.1502308,17.2669623 52.73396,18.5942457 C54.3082766,22.1739268 53.9409073,31.9689797 51.6318524,47.9794044 C50.9212452,52.9065795 47.0335635,56.7438111 42.1402191,57.3478653 L13.0266358,60.9417634 L0.266851066,40.4996615 Z"
                      />
                      <path
                        stroke="#001955"
                        strokeWidth="1.404"
                        d="M19.3288823,59.9762707 L32.2990975,58.6186815"
                        opacity=".702"
                      />
                    </g>
                    <path
                      stroke="#3568E6"
                      strokeWidth="1.404"
                      d="M28.6841376,141.945085 C24.8592301,137.756088 22.4413061,134.36076 21.4303656,131.7591"
                    />
                  </g>
                  <g transform="translate(46.917 35.885)">
                    <path
                      fill="#F5AF95"
                      d="M30.2890259,51.100649 C26.3899333,51.100649 23.2305751,47.9096188 23.2305751,43.9714386 L23.2305751,31.9728707 C23.2305751,28.0346905 26.3899333,24.8436604 30.2890259,24.8436604 C34.1881185,24.8436604 37.3474767,28.0346905 37.3474767,31.9728707 L37.3474767,43.9714386 C37.3474767,47.9096188 34.1881185,51.100649 30.2890259,51.100649"
                    />
                    <path
                      fill="#F5AF95"
                      d="M41.8730838,10.9733355 L44.8717685,10.9733355 L46.3299265,21.6706083 C45.6448916,30.5883681 44.5736302,35.09619 43.1161424,35.1940742 L33.1646136,40.0663329 L23.7134584,33.8676154 L21.4501109,14.9618101 L41.8730838,10.9733355 Z"
                    />
                    <path
                      fill="#001751"
                      d="M37.5895472,18.6920509 L36.9681258,22.4687401 L35.5762663,28.907892 C44.0284188,47.7892648 45.331758,60.7658121 39.4862838,67.837534 C30.7180725,78.4451167 11.5849284,82.9824802 2.98116603,64.8695576 C-2.75467552,52.7942759 -0.0076905544,39.623578 11.2221209,25.3574641 C10.6864512,20.8414387 8.30612177,-3.78541756 39.4862838,0.917977925 C49.5230461,2.43198104 46.933555,9.14580178 45.0946457,13.337181"
                    />
                    <path
                      fill="#F5AF95"
                      d="M37.3293108,24.6593305 C37.4480505,26.5495244 36.7378526,28.2655656 35.7408872,28.4906898 C34.7439218,28.7158141 33.841052,27.3693164 33.7200719,25.4791225 C33.6013322,23.5889285 34.3115301,21.8728873 35.3084955,21.6477631 C36.3054609,21.4226389 37.2105711,22.7691366 37.3293108,24.6593305"
                    />
                  </g>
                </g>
              </g>
              <g className="plant_hero" transform="translate(716 309)">
                <polyline
                  fill="url(#illustration_1_home-F)"
                  fillRule="nonzero"
                  points="26 113 101 112.262 28.671 109"
                  opacity=".742"
                />
                <g transform="translate(19)">
                  <path
                    fill="#1972F4"
                    fillRule="nonzero"
                    d="M13.2911839,93.0725609 C32.1951454,89.9813484 41.6471262,86.4660096 41.6471262,82.5265443 C41.6471262,76.6173465 28.5573613,78.971171 29.6458241,76.2760265 C30.7342868,73.5808821 46.3918389,67.9503861 44.7991542,61.6854969 C43.2064696,55.4206077 35.969885,59.3096021 33.7750065,56.6760492 C31.580128,54.0424964 51.6818089,44.6893032 51.6818089,38.0943859 C51.6818089,31.4994686 43.4567852,36.3882994 40.8259061,35.3191724 C38.195027,34.2500454 50.9334267,16.696448 51.6818089,11.3544059 C52.4301912,6.01236374 51.8218421,0 46.7344841,0 C41.6471262,0 38.5192063,7.40484648 36.8716369,12.9506541 C35.2240674,18.4964617 34.1674439,28.6446993 32.4911313,28.6446993 C30.8148187,28.6446993 27.5468657,22.2797238 25.4217474,22.2797238 C23.296629,22.2797238 21.2879484,27.8614598 23.0606757,42.2687545 C24.833403,56.6760492 19.5757483,48.3124273 17.0223234,48.3124273 C14.4688986,48.3124273 11.1999197,48.2872774 10.2099418,51.802103 C9.2199639,55.3169286 11.524099,69.4106195 11.524099,70.0414199 C11.524099,70.6722202 9.10711668,70.8061819 5.58833512,67.9426871 C2.06955355,65.0791924 -3.47586154,70.585992 2.96309837,79.1728834 C7.25573831,84.8974776 10.6984335,89.5307034 13.2911839,93.0725609 Z"
                  />
                  <path
                    stroke="#001955"
                    strokeWidth="1.5"
                    d="M47.5912642,5.78139535 C30.1816735,40.5163033 17.1192656,76.2442042 8.4040404,112.965098"
                  />
                  <polyline
                    stroke="#001955"
                    strokeWidth="1.5"
                    points="34.873 81.769 17.487 81.769 7.879 74.107"
                  />
                  <polyline
                    stroke="#001955"
                    strokeWidth="1.5"
                    points="39.181 64.201 22.147 65.984 14.707 54.66"
                  />
                  <polyline
                    stroke="#001955"
                    strokeWidth="1.5"
                    points="44.77 41.37 31.263 42.909 25.212 29.958"
                  />
                </g>
                <g transform="matrix(-1 0 0 1 28 76)">
                  <path
                    fill="#FDBA5F"
                    fillRule="nonzero"
                    d="M12.3841442,2.44412667 C3.78977273,9.17463728 1.35582386,20.6101563 6.61423562,24.2513114 C11.8726474,27.8924665 20.0438343,21.9052595 22.2577681,13.6357492 C24.4717019,5.36623884 20.9785156,-4.28638393 12.3841442,2.44412667 Z"
                  />
                  <path
                    stroke="#001955"
                    strokeWidth="1.5"
                    d="M19.3587757,3.73303571 C7.77471739,21.8259394 1.39257812,32.8522972 0.212357955,36.8121094"
                  />
                  <polyline
                    stroke="#001955"
                    strokeWidth="1.5"
                    points="8.765 12.199 8.765 20.616 16.478 18.36"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <span className="border_bottom" />
    </HeroHome>
  </>
);

export default Header;
