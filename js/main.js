// Main JavaScript file

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for navigation items
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            navItems.forEach(navItem => navItem.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // This will be expanded when we create the full website with actual sections
            const targetText = this.querySelector('h3').textContent.trim();
            console.log(`Navigating to: ${targetText}`);
        });
    });

    // Update navigation item styles
    navItems.forEach(item => {
        // For items that aren't links to the current page
        if (!item.classList.contains('active')) {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
                this.style.transition = 'transform 0.3s ease';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        }
    });

    // Add gradient animation to the hero text
    const gradientText = document.querySelector('.gradient-text');
    if (gradientText) {
        // Add subtle animation to the gradient
        let degree = 0;
        setInterval(() => {
            degree = (degree + 1) % 360;
            gradientText.style.background = `linear-gradient(${degree}deg, #00c6b0, #6a50c7)`;
            gradientText.style.backgroundClip = 'text';
            gradientText.style.webkitBackgroundClip = 'text';
            gradientText.style.color = 'transparent';
        }, 100);
    }
    
    // Add hover effect to team member cards
    const teamMembers = document.querySelectorAll('.team-member');
    if (teamMembers.length > 0) {
        teamMembers.forEach(member => {
            member.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
                this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
                this.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            });
            
            member.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.boxShadow = '';
                this.style.backgroundColor = '';
            });
        });
    }
    
    // Handle "Apply Now" button clicks to show email instructions
    const applyDialogButtons = document.querySelectorAll('.apply-now-dialog-button');
    console.log('Found apply buttons:', applyDialogButtons.length);
    if (applyDialogButtons.length > 0) {
        applyDialogButtons.forEach(button => {
            button.addEventListener('click', showApplyDialog);
        });
    } else {
        console.error('No apply buttons found with class .apply-now-dialog-button');
    }
    
    // Make all background videos loop continuously, even if they end
    const backgroundVideos = document.querySelectorAll('.video-background video');
    backgroundVideos.forEach(video => {
        // Ensure the loop attribute is set
        video.loop = true;
        
        // Add an event listener for when the video ends to restart it
        // This is a fallback in case the loop attribute doesn't work in some browsers
        video.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
            console.log('Video restarted');
        });
        
        // Force the video to play in case it's paused
        video.play().catch(error => {
            console.log('Autoplay prevented by browser:', error);
            // Add a play button if autoplay is blocked
            if (video.parentNode) {
                const playButton = document.createElement('button');
                playButton.className = 'video-play-button';
                playButton.innerHTML = '<svg viewBox="0 0 24 24" width="36" height="36"><path fill="white" d="M8 5v14l11-7z"></path></svg>';
                playButton.style.position = 'absolute';
                playButton.style.top = '50%';
                playButton.style.left = '50%';
                playButton.style.transform = 'translate(-50%, -50%)';
                playButton.style.zIndex = '3';
                playButton.style.background = 'rgba(0, 0, 0, 0.5)';
                playButton.style.border = 'none';
                playButton.style.borderRadius = '50%';
                playButton.style.width = '60px';
                playButton.style.height = '60px';
                playButton.style.cursor = 'pointer';
                
                playButton.addEventListener('click', function() {
                    video.play();
                    this.remove();
                });
                
                video.parentNode.appendChild(playButton);
            }
        });
    });
}); });
