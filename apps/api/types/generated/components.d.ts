import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonButton extends Schema.Component {
  collectionName: 'components_common_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    variant: Attribute.Enumeration<
      ['default', 'destructive', 'outline', 'ghost']
    > &
      Attribute.DefaultTo<'default'>;
  };
}

export interface CommonClients extends Schema.Component {
  collectionName: 'components_common_clients';
  info: {
    displayName: 'client';
    icon: 'user';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    width: Attribute.Decimal;
    height: Attribute.Decimal;
  };
}

export interface CommonFeaturedItem extends Schema.Component {
  collectionName: 'components_common_featured_items';
  info: {
    displayName: 'Featured Item';
    icon: 'star';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    featured: Attribute.String;
    muted: Attribute.String;
  };
}

export interface CommonHeadingCarousel extends Schema.Component {
  collectionName: 'components_common_heading_carousels';
  info: {
    displayName: 'Heading Carousel';
    icon: 'briefcase';
  };
  attributes: {
    with_container: Attribute.Boolean & Attribute.DefaultTo<true>;
    first_text: Attribute.Text;
    second_text: Attribute.Text;
  };
}

export interface CommonHeading extends Schema.Component {
  collectionName: 'components_common_headings';
  info: {
    displayName: 'Heading';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    sub_title: Attribute.String;
    with_container: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface CommonLink extends Schema.Component {
  collectionName: 'components_common_links';
  info: {
    displayName: 'Link';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface CommonSectionContentWithTitle extends Schema.Component {
  collectionName: 'components_common_section_content_with_title_s';
  info: {
    displayName: 'Section Content (with title)';
    icon: 'bold';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    sub_title: Attribute.String;
  };
}

export interface CommonSeo extends Schema.Component {
  collectionName: 'components_common_seos';
  info: {
    displayName: 'SEO';
    icon: 'book';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    decription: Attribute.Text;
    keywords: Attribute.String;
    preventIndexing: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface CommonSeparator extends Schema.Component {
  collectionName: 'components_common_separators';
  info: {
    displayName: 'Separator';
    description: '';
  };
  attributes: {
    with_container: Attribute.Boolean & Attribute.DefaultTo<true>;
    margin_button: Attribute.Float;
    margin_top: Attribute.Float;
  };
}

export interface CommonSocial extends Schema.Component {
  collectionName: 'components_common_socials';
  info: {
    displayName: 'social';
    icon: 'heart';
    description: '';
  };
  attributes: {
    platform: Attribute.Enumeration<
      [' linkedin', 'github', 'twitter', 'facebook']
    >;
    link: Attribute.String & Attribute.Required;
  };
}

export interface CommonSpacer extends Schema.Component {
  collectionName: 'components_common_spacers';
  info: {
    displayName: 'spacer';
    icon: 'arrowDown';
    description: '';
  };
  attributes: {
    height: Attribute.Float;
  };
}

export interface CommonStep extends Schema.Component {
  collectionName: 'components_common_steps';
  info: {
    displayName: 'step';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    number: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Attribute.DefaultTo<1>;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
  };
}

export interface CommonTestimonialIdentity extends Schema.Component {
  collectionName: 'components_common_testimonial_identities';
  info: {
    displayName: 'testimonial identity';
    icon: 'user';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    occupation: Attribute.String;
    picture: Attribute.Media;
    company_logo: Attribute.Media;
  };
}

export interface CommonVideo extends Schema.Component {
  collectionName: 'components_common_videos';
  info: {
    displayName: 'video';
    icon: 'slideshow';
    description: '';
  };
  attributes: {
    overlay: Attribute.Media & Attribute.Required;
    youtube_video_hash: Attribute.String;
  };
}

export interface FooterCopyright extends Schema.Component {
  collectionName: 'components_footer_copyrights';
  info: {
    displayName: 'copyright';
    icon: 'information';
  };
  attributes: {
    privacy: Attribute.Component<'common.link'>;
    back_to_top: Attribute.Boolean;
    copyright: Attribute.Text;
  };
}

export interface FooterElevateSection extends Schema.Component {
  collectionName: 'components_footer_elevate_sections';
  info: {
    displayName: 'elevate_section';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    cta: Attribute.Component<'common.button'>;
  };
}

export interface FooterInfo extends Schema.Component {
  collectionName: 'components_footer_infos';
  info: {
    displayName: 'Info';
    icon: 'arrowDown';
  };
  attributes: {
    direction: Attribute.String;
    phone: Attribute.String;
    email: Attribute.Email;
  };
}

export interface HomeAboutUs extends Schema.Component {
  collectionName: 'components_home_about_uses';
  info: {
    displayName: 'About Us';
    description: '';
  };
  attributes: {
    with_container: Attribute.Boolean & Attribute.DefaultTo<true>;
    heading: Attribute.Component<'common.section-content-with-title'>;
    content: Attribute.RichText;
  };
}

export interface HomeClients extends Schema.Component {
  collectionName: 'components_home_clients';
  info: {
    displayName: 'Clients';
    icon: 'user';
    description: '';
  };
  attributes: {
    list: Attribute.Component<'common.clients', true>;
    with_container: Attribute.Boolean;
  };
}

export interface HomeContactUs extends Schema.Component {
  collectionName: 'components_home_contact_uses';
  info: {
    displayName: 'contact us';
    icon: 'message';
  };
  attributes: {
    with_container: Attribute.Boolean & Attribute.DefaultTo<true>;
    heading: Attribute.Component<'common.section-content-with-title'>;
    description: Attribute.Text;
  };
}

export interface HomeExperience extends Schema.Component {
  collectionName: 'components_home_experiences';
  info: {
    displayName: 'experience';
    icon: 'crown';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    button: Attribute.Component<'common.button'>;
    with_container: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface HomeFooter extends Schema.Component {
  collectionName: 'components_home_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    deftdodo_banner: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface HomeHeadingCarousel extends Schema.Component {
  collectionName: 'components_home_heading_carousels';
  info: {
    displayName: 'Heading Carousel';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    with_container: Attribute.Boolean & Attribute.DefaultTo<true>;
    first_text: Attribute.Text;
    second_text: Attribute.Text;
    video: Attribute.Component<'common.video'>;
  };
}

export interface HomeHeading extends Schema.Component {
  collectionName: 'components_home_headings';
  info: {
    displayName: 'Heading';
    description: '';
  };
  attributes: {
    with_container: Attribute.Boolean;
    heading_bold: Attribute.String & Attribute.Required;
    heading_thing: Attribute.String;
    description: Attribute.Text;
    cta: Attribute.String;
    href: Attribute.String & Attribute.DefaultTo<'/'>;
  };
}

export interface HomeKeyFacts extends Schema.Component {
  collectionName: 'components_home_key_facts';
  info: {
    displayName: 'key facts';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    featured: Attribute.Component<'common.featured-item', true>;
    with_container: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface HomeProjects extends Schema.Component {
  collectionName: 'components_home_projects';
  info: {
    displayName: 'Projects';
    description: '';
  };
  attributes: {
    projects: Attribute.Relation<
      'home.projects',
      'oneToMany',
      'api::project.project'
    >;
    with_container: Attribute.Boolean & Attribute.DefaultTo<true>;
    heading: Attribute.Component<'common.section-content-with-title'>;
  };
}

export interface HomeServices extends Schema.Component {
  collectionName: 'components_home_services';
  info: {
    displayName: 'Services';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    with_container: Attribute.Boolean & Attribute.DefaultTo<true>;
    services: Attribute.Relation<
      'home.services',
      'oneToMany',
      'api::service.service'
    >;
    heading: Attribute.Component<'common.section-content-with-title'>;
    description: Attribute.Text;
    cta_url: Attribute.String;
  };
}

export interface HomeStepByStep extends Schema.Component {
  collectionName: 'components_home_step_by_steps';
  info: {
    displayName: 'step by step';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    with_container: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    title: Attribute.String;
    steps: Attribute.Component<'common.step', true>;
  };
}

export interface HomeTeam extends Schema.Component {
  collectionName: 'components_home_teams';
  info: {
    displayName: 'Team';
    icon: 'handHeart';
    description: '';
  };
  attributes: {
    heading: Attribute.Component<'common.section-content-with-title'>;
    members: Attribute.Relation<
      'home.team',
      'oneToMany',
      'api::team-member.team-member'
    >;
    with_container: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface HomeTestimonials extends Schema.Component {
  collectionName: 'components_home_testimonials';
  info: {
    displayName: 'Testimonials';
    icon: 'feather';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    with_container: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    testimonials: Attribute.Relation<
      'home.testimonials',
      'oneToMany',
      'api::testimonial.testimonial'
    >;
  };
}

export interface SharedHeader extends Schema.Component {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'Header';
    icon: 'layout';
    description: '';
  };
  attributes: {
    nav: Attribute.Component<'common.link', true>;
    CTA: Attribute.Component<'common.button'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.button': CommonButton;
      'common.clients': CommonClients;
      'common.featured-item': CommonFeaturedItem;
      'common.heading-carousel': CommonHeadingCarousel;
      'common.heading': CommonHeading;
      'common.link': CommonLink;
      'common.section-content-with-title': CommonSectionContentWithTitle;
      'common.seo': CommonSeo;
      'common.separator': CommonSeparator;
      'common.social': CommonSocial;
      'common.spacer': CommonSpacer;
      'common.step': CommonStep;
      'common.testimonial-identity': CommonTestimonialIdentity;
      'common.video': CommonVideo;
      'footer.copyright': FooterCopyright;
      'footer.elevate-section': FooterElevateSection;
      'footer.info': FooterInfo;
      'home.about-us': HomeAboutUs;
      'home.clients': HomeClients;
      'home.contact-us': HomeContactUs;
      'home.experience': HomeExperience;
      'home.footer': HomeFooter;
      'home.heading-carousel': HomeHeadingCarousel;
      'home.heading': HomeHeading;
      'home.key-facts': HomeKeyFacts;
      'home.projects': HomeProjects;
      'home.services': HomeServices;
      'home.step-by-step': HomeStepByStep;
      'home.team': HomeTeam;
      'home.testimonials': HomeTestimonials;
      'shared.header': SharedHeader;
    }
  }
}
