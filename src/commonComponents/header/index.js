import jenkins from '../assets/jenkins1.png'

function Header() {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md">
                        <img src={jenkins} alt=""/>
                    </div>
                    <div class="col-md align-self-center">
                        <h1 class="display-1">
                            Jenkins
                        </h1>
                        <p>
                            Build great things at any scale
                        </p>
                        <p>
                            The leading open source automation server, Jenkins provides hundreds of plugins to support building, deploying and automating any project.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;