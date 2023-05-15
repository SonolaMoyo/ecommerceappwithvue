<template>
    <div class="footer"> 
        <div class="backtotop">Back To Top</div>
        <div class="gettoknow">
            <table>
                <tr>
                    <th>Get to Know Us</th>
                    <th>Get to Know Us</th>
                    <th>Get to Know Us</th>
                    <th>Get to Know Us</th>
                </tr>
                <tr>
                    <td>Careers</td>
                    <td>Careers</td>
                    <td>Careers</td>
                    <td>Careers</td>
                </tr>
                <tr>
                    <td>Blogs</td>
                    <td>Blogs</td>
                    <td>Blogs</td>
                    <td>Blogs</td>
                </tr>
                <tr>
                    <td>About Chronos</td>
                    <td>About Chronos</td>
                    <td>About Chronos</td>
                    <td>About Chronos</td>
                </tr>
                <tr>
                    <td>Investor Relations</td>
                    <td>Investor Relations</td>
                    <td>Investor Relations</td>
                    <td>Investor Relations</td>
                </tr>
                <tr>
                    <td>Chronos Devices</td>
                    <td>Chronos Devices</td>
                    <td>Chronos Devices</td>
                    <td>Chronos Devices</td>
                </tr>
                <tr>
                    <td>Chronos Science</td>
                    <td>Chronos Science</td>
                    <td>Chronos Science</td>
                    <td>Chronos Science</td>
                </tr>
            </table>
        </div>
        <div class="logo"><img src="../assets/img/logo.png" alt=""></div>
    </div>
</template>

<script>
export default {
    name: 'FooterPage',
}
</script>

<style scoped>
.footer{
    width: inherit;
    height: fit-content;
    display: block;
    justify-content: center;
    align-items: center;
    background: #232F3E;
    align-content: space-around;
}
.backtotop{
    position: relative;
    top: 0px;
    display: grid;
    width: inherit;
    height: 63px;
    justify-content: center;
    align-content: center;
    background: #37475A;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 27px;
    color: #ffffff;
}
.gettoknow{
    width: inherit;
    height: fit-content;
    padding: 30px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;

}
.gettoknow table, .gettoknow tr{
    width: 100%;
    text-align: left;
    color: #fff;
    padding: 5px;
}
a{
    text-decoration: none;
    text-decoration-color: #ffffff;
}
.logo{
    border-top: 2px solid #ffff99;
    padding: 5px;
    width: inherit;
    text-align: center;
}
.logo img{
    border-radius: 5px;
}

/* Media query for phone screen size */
@media (max-width: 480px) {
  /* Hide the navigation by default */
  .footer {
    display: none;
  }
}
</style>