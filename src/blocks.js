export default (editor, opt = {}) => {
  let bm = editor.BlockManager;

  if (opt.resetBlocks) {
    bm.getAll().reset();
  }

  const allBlocks = {
    category: 'Basic'
  }

  const contentBlocks = {
    category: 'Others',
    attributes: { class: 'test-blocks' }
  }

  bm.add('mj-1-column', {
    label: '1 Column',
    content: `<mj-section>
        <mj-column><mj-text>Content 1</mj-text></mj-column>
      </mj-section>`,
    attributes: { class: 'gjs-fonts gjs-f-b1' },
    ...allBlocks,
  });

  bm.add('mj-2-columns', {
    label: '2 Columns',
    content: `<mj-section>
        <mj-column><mj-text>Content 1</mj-text></mj-column>
        <mj-column><mj-text>Content 2</mj-text></mj-column>
      </mj-section>`,
    attributes: { class: 'gjs-fonts gjs-f-b2' },
    ...allBlocks,
  });

  bm.add('mj-3-columns', {
    label: '3 Columns',
    content: `<mj-section>
        <mj-column><mj-text>Content 1</mj-text></mj-column>
        <mj-column><mj-text>Content 2</mj-text></mj-column>
        <mj-column><mj-text>Content 3</mj-text></mj-column>
      </mj-section>`,
    attributes: { class: 'gjs-fonts gjs-f-b3' },
    ...allBlocks,
  });

  bm.add('mj-text', {
    label: 'Text',
    content: '<mj-text>Insert text here</mj-text>',
    attributes: { class: 'gjs-fonts gjs-f-text' },
    ...allBlocks,
  });

  bm.add('mj-button', {
    label: 'Button',
    content: '<mj-button>Button</mj-button>',
    attributes: { class: 'gjs-fonts gjs-f-button' },
    ...allBlocks,
  });

  bm.add('mj-image', {
    label: 'Image',
    content: '<mj-image src="http://placehold.it/350x250/78c5d6/fff">',
    attributes: { class: 'fa fa-image' },
    ...allBlocks,
  });

  bm.add('mj-divider', {
    label: 'Divider',
    content: '<mj-divider/>',
    attributes: { class: 'gjs-fonts gjs-f-divider'},
    ...allBlocks,
  });

  bm.add('mj-social-group', {
    label: 'Group Social',
    content: `<mj-social font-size="12px" icon-size="24px" border-radius="12px" mode="horizontal">
        <mj-social-element src="https://cdn-images.mailchimp.com/icons/social-block-v2/dark-facebook-48.png" href="https://www.facebook.com/tutor.platform.global/?ref=br_rs"></mj-social-element>
        <mj-social-element src="https://cdn-images.mailchimp.com/icons/social-block-v2/dark-link-48.png" href="https://www.tutorbot.io/"></mj-social-element>
        <mj-social-element src="https://cdn-images.mailchimp.com/icons/social-block-v2/dark-linkedin-48.png" href="https://www.linkedin.com/company/tutor-platform/"></mj-social-element>
      </mj-social>`,
    attributes: { class: 'fa fa-share-alt' },
    ...allBlocks,
  });

  bm.add('mj-spacer', {
    label: 'Spacer',
    content: '<mj-spacer/>',
    attributes: { class: 'fa fa-arrows-v'},
    ...allBlocks,
  });

  //Content Blocks
  bm.add('mj-empty-spacer', {
    label: '<div> <image src="https://storage.googleapis.com/postemail/builder-blocks-icons/spacer.jpg" style="width: 100%" /> </div>',
    content: '<mj-section padding="0"> <mj-column padding="0" width="100%"> <mj-spacer padding="0" height="10px" /> </mj-column> </mj-section>',
    ...contentBlocks,
  });


  bm.add('mj-top-nav', {
    label: '<div> <image src="https://storage.googleapis.com/postemail/builder-blocks-icons/top-nav.jpg" style="width: 100%" /> </div>',
    content: '<mj-section padding="0" background-color="#ffffff"> <mj-column width="39%" vertical-align="middle"> <mj-image src="https://travlytix.com/assets/img/logo/logo-clr.svg" padding="0" alt="logo" width="180px" padding-bottom="0px" padding-top="10px"></mj-image> </mj-column> <mj-column width="60%" vertical-align="middle"> <mj-text align="center" padding-bottom="0px" padding-top="10px"><a href="#" style="text-decoration: none; color: inherit;">Home</a>&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<a href="#" style="text-decoration: none; color: inherit;">Features</a>&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; <a href="#" style="text-decoration: none; color: inherit;">Portfolio</a></mj-text> </mj-column> </mj-section>',
    ...contentBlocks,
  });

  bm.add('mj-banner', {
    label: '<div> <image src="https://storage.googleapis.com/postemail/builder-blocks-icons/banner.jpg" style="width: 100%" /> </div>',
    content: '<mj-section padding="0" background-url="https://storage.googleapis.com/postemail/banner/bg-banner.jpg" vertical-align="middle" background-size="cover" full-width="full-width" background-repeat="no-repeat"> <mj-column width="100%" vertical-align="middle"> <mj-text align="center" font-size="14px" color="#ffffff" padding-bottom="10px" padding-top="45px"><span style="font-size: 30px; line-height: 30px;">Ipsum is simply dummy</span><br/><br/>Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</mj-text> <mj-button align="center" font-size="16px" background-color="#1B6FFF" color="#fff" border-radius="4px" href="#" padding-bottom="45px" padding-top="10px">Book Now</mj-button> </mj-column> </mj-section>',
    ...contentBlocks,
  });

  bm.add('mj-img-content', {
    label: '<div> <image src="https://storage.googleapis.com/postemail/builder-blocks-icons/img-content.jpg" style="width: 100%" /> </div>',
    content: '<mj-section padding="0 20px" background-color="#FFFFFF"> <mj-column width="50%" background-color="#FFFFFF"> <mj-image padding="0" src="https://storage.googleapis.com/postemail/img/4.jpg" alt="" align="center" border="none"></mj-image> </mj-column> <mj-column width="50%"> <mj-text font-size="17px" color="#444" line-height="normal" align="center" padding="0 20px">Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Lorem Ipsum Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus Lorem Ipsum</mj-text> </mj-column> </mj-section>',
    ...contentBlocks,
  });


}
