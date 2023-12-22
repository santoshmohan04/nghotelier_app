import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  ngOnInit(): void {
    // Modal Video

    $(document).on('ready', () => {
      let $videoSrc: any;
      $('.btn-play').on('click', () => {
        $videoSrc = $(this).data('src');
      });
      console.log($videoSrc);

      $('#videoModal').on('shown.bs.modal', (e) => {
        $('#video').attr(
          'src',
          $videoSrc + '?autoplay=1&amp;modestbranding=1&amp;showinfo=0'
        );
      });

      $('#videoModal').on('hide.bs.modal', (e) => {
        $('#video').attr('src', $videoSrc);
      });
    });
  }
}
