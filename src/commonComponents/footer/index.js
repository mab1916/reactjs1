import cc from "../assets/cc.png"
function Footer() {
    return (
        <footer class="bg-primary text-white text-center text-lg-start">
            {/* <!-- Grid container --> */}
            <div class="container p-4">
                {/* <!--Grid row--> */}
                <div class="row">
                {/* <!--Grid column--> */}
                    <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
                        <p class="text-uppercase fs-6">Improve this page | Report a problem</p>
                        <img src={cc} alt=""/>
                        <p>Creative Commons Attribution-ShareAlike license The content driving this site is licensed under the Creative Commons Attribution-ShareAlike 4.0 license.</p>
                    </div>
                {/* <!--Grid column 1st Links--> */}
                    <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase">___________</h5>
                        <h5 class="text-uppercase mb-0">
                            <b>
                                Resources
                            </b>
                        </h5>
                        <ul class="list-unstyled">
                            <li>
                                <a href="https://www.jenkins.io/download/" class="text-white">Downloads</a>
                            </li>
                            <li>
                                <a href="https://www.jenkins.io/node/" class="text-white">Blog</a>
                            </li>
                            <li>
                                <a href="https://www.jenkins.io/doc/" class="text-white">Documentation</a>
                            </li>
                            <li>
                                <a href="https://plugins.jenkins.io/" class="text-white">Plugins</a>
                            </li>
                            <li>
                                <a href="https://www.jenkins.io/security/" class="text-white">Security</a>
                            </li>
                            <li>
                                <a href="https://www.jenkins.io/participate/" class="text-white">Contributing</a>
                            </li>
                        </ul>
                    </div>
                {/* <!--Grid column 2nd Links--> */}
                    <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase">___________</h5>
                        <h5 class="text-uppercase mb-0">
                            <b>
                                Project
                            </b>
                        </h5>
                        <ul class="list-unstyled">
                            <li>
                                <a href="https://www.jenkins.io/project/" class="text-white">Structure and Governance</a>
                            </li>
                            <li>
                                <a href="https://issues.jenkins.io/" class="text-white">Issue Tracker</a>
                            </li>
                            <li>
                                <a href="https://www.jenkins.io/project/roadmap/" class="text-white">Roadmap</a>
                            </li>
                            <li>
                                <a href="https://github.com/jenkinsci" class="text-white">GitHub</a>
                            </li>
                            <li>
                                <a href="https://ci.jenkins.io/" class="text-white">Jenkins on Jenkins</a>
                            </li>
                        </ul>
                    </div>
                {/* <!--Grid column 3rd Links--> */}
                    <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase">___________</h5>
                        <h5 class="text-uppercase mb-0">
                            <b>
                                Community
                            </b>
                        </h5>
                        <ul class="list-unstyled">
                            <li>
                                <a href="https://www.jenkins.io/events/" class="text-white">Events</a>
                            </li>
                            <li>
                                <a href="https://www.jenkins.io/mailing-lists/" class="text-white">Mailing Lists</a>
                            </li>
                            <li>
                                <a href="https://www.jenkins.io/chat/" class="text-white">Chats</a>
                            </li>
                            <li>
                                <a href="https://www.jenkins.io/sigs/" class="text-white">Special Interest Groups</a>
                            </li>
                            <li>
                                <a href="https://twitter.com/jenkinsci" class="text-white">Twitter</a>
                            </li>
                            <li>
                                <a href="https://reddit.com/r/jenkinsci" class="text-white">Reddit</a>
                            </li>
                        </ul>
                    </div>
                {/* <!--Grid column 4th Links--> */}
                    <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase">___________</h5>
                        <h5 class="text-uppercase mb-0">
                            <b>
                                Other
                            </b>
                        </h5>
                        <ul class="list-unstyled">
                            <li>
                                <a href="https://www.jenkins.io/conduct/" class="text-white">Code of Conduct</a>
                            </li>
                            <li>
                                <a href="https://www.jenkins.io/press/" class="text-white">Press Information</a>
                            </li>
                            <li>
                                <a href="https://www.jenkins.io/merchandise/" class="text-white">Merchandise</a>
                            </li>
                            <li>
                                <a href="https://www.jenkins.io/artwork/" class="text-white">Artwork</a>
                            </li>
                            <li>
                                <a href="https://www.jenkins.io/awards/" class="text-white">Awards</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;