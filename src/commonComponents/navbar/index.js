function Navbar() {
    return(
        <nav  class="navbar fixed-top navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
            {/* Logo */}
                <a target="_blank" rel="noopener noreferrer" class="navbar-brand" href="https://www.jenkins.io/">Jenkins</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
            {/* cd */}
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    cd
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a target="_blank" rel="noopener noreferrer" class="dropdown-item" href="https://cd.foundation/">What is CDF?</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" class="dropdown-item" href="https://jenkins-x.io/">Jenkins X</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" class="dropdown-item" href="https://cloud.google.com/tekton/">Tekton</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" class="dropdown-item" href="https://www.spinnaker.io/">Spinnaker</a></li>
                </ul>
            </div>
                <ul class="goright navbar-nav me-auto mb-2 mb-lg-0">
            {/* Blog */}
                <li class="nav-item">
                    <a target="_blank" rel="noopener noreferrer" class="nav-link" href="https://www.jenkins.io/node/">Blog</a>
                </li>
            {/* Documentation */}
                <li class="nav-item dropdown">
                    <a target="_blank" rel="noopener noreferrer" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Documentation
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a target="_blank" rel="noopener noreferrer" class="dropdown-item" href="https://www.jenkins.io/solutions/">Solution Pages</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" class="dropdown-item" href="https://www.jenkins.io/doc/developer/">Developer Guide</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" class="dropdown-item" href="https://www.jenkins.io/participate/">Contributer</a></li>
                    </ul>
                </li>
            {/* Plugins */}
                <li class="nav-item">
                        <a target="_blank" rel="noopener noreferrer" class="nav-link" href="https://plugins.jenkins.io/">Plugins</a>
                </li>
            {/* Community */}
                <li class="nav-item dropdown">
                    <a target="_blank" rel="noopener noreferrer" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Community
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a target="_blank" rel="noopener noreferrer" class="dropdown-item" href="https://www.jenkins.io/participate/">Overview</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" class="dropdown-item" href="https://www.jenkins.io/chat/">Chat</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" class="dropdown-item" href="https://www.jenkins.io/projects/jam/">Meet</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" class="dropdown-item" href="https://www.jenkins.io/events/">Events</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" class="dropdown-item" href="https://issues.jenkins.io/">Issue Tracker</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" class="dropdown-item" href="https://www.jenkins.io/mailing-lists/">Mailing Lists</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" class="dropdown-item" href="https://www.jenkins.io/project/roadmap/">Roadmap</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" class="dropdown-item" href="https://accounts.jenkins.io/">Account Management</a></li>
                    </ul>
                </li>
            {/* Subprojects */}
                <li class="nav-item dropdown">
                    <a target="_blank" rel="noopener noreferrer" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Subprojects
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a target="_blank" rel="noopener noreferrer" class="dropdown-item" href="https://www.jenkins.io/projects/">Overview</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" class="dropdown-item" href="https://www.jenkins.io/projects/evergreen/">Evergreen</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" class="dropdown-item" href="https://www.jenkins.io/projects/gsoc/">Google Summer of Cade in Jenkins</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" class="dropdown-item" href="https://www.jenkins.io/projects/infrastructure/">Infrastructure</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" class="dropdown-item" href="https://www.jenkins.io/projects/jam/">CI/CD and Jenkins Area Meetups</a></li>
                    </ul>
                </li>
            {/* About */}
                <li class="nav-item dropdown">
                    <a target="_blank" rel="noopener noreferrer" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    About
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a target="_blank" rel="noopener noreferrer" class="dropdown-item" href="https://www.jenkins.io/project/roadmap/">Roadmap</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" class="dropdown-item" href="https://www.jenkins.io/security/">Security</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" class="dropdown-item" href="https://www.jenkins.io/press/">Press</a></li>
                    </ul>
                </li>
            {/* English */}
                <li class="nav-item dropdown">
                    <a target="_blank" rel="noopener noreferrer" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    English
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a target="_blank" rel="noopener noreferrer" class="dropdown-item" href="https://www.jenkins.io/zh/">Chinese</a></li>
                    </ul>
                </li>
            {/* Download Button */}
                <li class="nav-item">
                    <a href="https://www.jenkins.io/download/" target="_blank" rel="noopener noreferrer">
                        <button class="btn btn-primary" type="submit">Download</button>
                    </a>
                </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;