<template>
    <div class="wrapper">
        <div class="contact-box">
            <div class="top-triangle"></div>
            <div class="form-box">
                <div class="left-form">
                    <div class="top-form" style="padding-top: 1em;">
                        <input type="text" placeholder="Name"> 
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Phone"> 
                        <input type="email" id="email" name="email" placeholder="Email"> 
                    </div>
                    <div class="bottom-form" style="padding: 1em;"> <textarea placeholder="Message"></textarea> </div>
                </div>
                <div class="right-form">
                    <div><strong>WORK TIME </strong></div>
                    <div>WEEKDAYS: 6:30am-5:00pm</div>
                   
                 
                </div>
            </div>
            <div class="bottom-triangle">
                <div class="send-button">
                    SUBMIT
                </div>
            </div>
        </div>
        <div class="contact-info">
            <div style="margin-top: 2em;">
                P.O. BOX 20144, <br>
                1730 WESTAR DR., <br>
                OXNARD, CA 93034
            </div>
            <div style="margin-top: 2em;">
               <img width="30" src="../assets/icons/telephone.png" style="color: orange;   transform:translate(0,10px);"/>  <span style="height: 10em;"> 805-487-1477</span>
            </div>
            <div style="margin: 2em 0;">info@serviceprofire.com</div>

        </div>
        <div class="footer">©{{new Date().getFullYear()}} Service Pro Fire Protection</div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.wrapper {
    width: 100%;
    margin-bottom: 3em;
}
.contact-box {
    width: 60%;
    margin: 0 auto;
    position: relative;
}

.top-triangle {
    position: absolute;
    right: 0;
    width: 0;
	height: 0;
	border-left: 54vw solid transparent;
	border-right: 10vw solid transparent;
	border-bottom: 60px solid #00000010;
}
.form-box {
    width: 64vw;
    height: max-content;
    right: 5vw;
    background-color: #00000010;
    position: relative;
    top: 60px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.top-form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.bottom-form textarea{
    width: 100%;
    height: 5em;
}
.left-form {
    width: 60%;
}
.right-form {
    text-align: left;
}
input {
    border-radius: 0;
    margin: 1em;
    height: 2em;
    max-width: 12em;
}
.send-button {
    position: relative;
    top: -6em;
    right: 6em;
    width: 10em;
    border-radius: 2em;
    background-color: #FF6701;
    cursor: pointer;
    color: white;
}
.bottom-triangle {
    width: 0;
	height: 0;
	border-left: 40vw solid transparent;
	border-right: 24vw solid transparent;
	border-top: 120px solid #00000010;
    position: relative;
    top: 60px;
    right: 5vw;
}
.contact-info {
    margin-top: 10em;
    display: flex;
    width: 100%;
    justify-content: space-around;
    text-align: left;
    font-weight: bold;
    margin-bottom: 3em;
    flex-wrap: wrap;
}

@media (max-width: 1050px) {
    .contact-box {
        width: 90%;
    }
    .form-box {
        width: 100% !important;
        right: 0 !important;
    }
    .left-form {
        width: 100%;
    }
    .top-triangle {
    border-left: 75vw solid transparent;
	border-right: 10vw solid transparent;
	border-bottom: 60px solid #00000010;
    }
    .bottom-triangle {
    left: .2em;
    border-left: 66vw solid transparent;
	border-right: 23vw solid transparent;
	border-top: 120px solid #00000010;
    }
    .send-button {
    position: relative;
    top: -6em;
    right: 8em;
    width: 10em;
    border-radius: 2em;
    background-color: #FF6701;
    cursor: pointer;
    color: white;
}
}
</style>