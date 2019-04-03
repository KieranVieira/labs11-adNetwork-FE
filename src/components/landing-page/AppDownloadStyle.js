import styled from 'styled-components';
import heroWave from '../../assets/hero-wave.png'
import desktopPhone from '../../assets/phone1.png'
import mobilePhone from '../../assets/phone2.png'
export const AppDownloadStyle = styled.div`
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");


  font-family: "Roboto", sans-serif;


  /* global */
  p {
    font-size:1.1rem;
    line-height:1.35;
    color: #5f5d6c;
  }
  .bg-gray {
    background-color:#eff4ff;
  }
  .padding {
    padding: 100px 0;
  }
/* app background with big wavy blue background */
  .app-download-flex{
    max-width:1200px;
    margin: 0 auto;
    position: relative;
    width: 100%;
    height: 73vh;
    display: flex;
    align-items: center;
    z-index: 1;
    &:before {
    background: url(${heroWave});
    background-repeat: no-repeat;
    background-position: right center;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
    }
  }
  .hero-moc {
    background: url(${desktopPhone});
    background-position: bottom right;
    background-repeat: no-repeat;
    content: "";
    position: absolute;
    width: 500px;
    height: 600px;
    vertical-align: middle;
    bottom: 0;
    right: 50px;

  }
  .app-download-item {
    h3 {
      font-size: 4rem;
      font-weight:500;
      max-width:500px;
    }
    p {
      margin: 20px 0;
      max-width:400px;
    }
  }

  .app-store-img:first-of-type {
    display:inline-block;
    margin-right:20px;
  }
 /* promo section  three icon column*/
.promo-section {
    padding:80px 0;
  }
.promo-row {
  display: flex;
  text-align:center;
}
.promo-col {
  margin-right:60px;
  
  h2 {
    font-size:1.5rem;
    margin: 10px 0 0 0;
  }
  p {
      margin: 20px 0;
      max-width:400px;
    }
}
.promo-icon {
      background-image: linear-gradient(-45deg, #2b18dd 0%, #1151d3 50%, #1151d3 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 700;
      margin-bottom: 10px;
      font-size: 50px;
    }


/* work content section  */
.work-content-section {
  padding: 100px 0;

}
.work-content-row { 
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
.content-mockups {
  position:relative;
  .mockup-back {
    background-image: url(${mobilePhone});
    background-repeat: no-repeat;
    background-position: center center;
    content: "";
    position: absolute;
    width: 500px;
    height: 500px;
    left: 80px;
    top: 0;
  }
  .mockup-front {
    background-image: url(${desktopPhone});
    background-position: bottom right;
    background-repeat: no-repeat;
    content: "";
    position: absolute;
    width: 450px;
    height: 600px;
    left: 0;
    top: -100px;
  }
}
.work-content-col-first_child{
  max-width: 50%;
  flex: 0 0 50%;
}

.work-content-second_child {
  margin-bottom: 40px;
  flex: 0 0 50%;
  max-width: 50%;
h2 {
  font-size: 36px;
    color: #333;
    margin: 0 0 10px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: -0.04em;
 }
 p {
  font-size: 15px;
    margin-bottom: 15px;
 }
}

.work-content-lists {

  .work-list-item {
  display: flex;
  align-items: center;

  i {
    background-image: linear-gradient(-45deg, #2b18dd 0%, #1151d3 50%, #1151d3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
    font-size: 40px;
    margin-right:30px;
    }
    p {
      margin-bottom:35px
    }
    h3 {
      font-size:22px;
      margin-bottom: 0;
      font-weight: 400;
      line-height: 1.7;
      color: #333;
      letter-spacing: -0.01em;
    }
  }
}


`

