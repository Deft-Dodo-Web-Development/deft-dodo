import { FeaturedItem, Step, StrapiResponse } from "./common.d";
import {
  Projects as BaseProjects,
  Services as BaseServices,
  ClientList,
  MediaResponse,
  Heading as BaseHeading,
} from "./common";

export namespace Components {
  export interface Heading {
    id: number;
    __component: "home.heading";
    finish: string;
    with_container: boolean;
    start: {
      id: number;
      title: string;
      sub_title: string;
      with_container: boolean;
    };
  }

  export interface HeadingCarousel {
    id: number;
    __component: "home.heading-carousel";
    with_container: boolean;
    first_text: string;
    second_text: string;
    video: {
      id: number;
      youtube_video_hash: string;
      overlay: MediaResponse;
    };
  }

  export interface AboutUs {
    id: number;
    __component: "home.about-us";
    with_container: boolean;
    content: string;
    heading: BaseHeading;
  }

  export interface Projects {
    id: number;
    __component: "home.projects";
    with_container: boolean;
    title: string;
    projects: StrapiResponse<BaseProjects[]>;
  }

  export interface Services {
    id: number;
    __component: "home.services";
    with_container: boolean;
    title: string;
    description: string;
    cta_url: string;
    services: StrapiResponse<BaseServices[]>;
    heading: BaseHeading;
  }

  export interface Separator {
    id: number;
    __component: "common.separator";
    with_container: boolean;
    margin_button: number;
    margin_top: number;
  }

  export interface Clients {
    id: number;
    __component: "home.clients";
    with_container: boolean;
    list: ClientList[];
  }

  export interface Spacer {
    id: number;
    __component: "common.spacer";
    height: number;
  }

  export interface KeyFacts {
    id: number;
    __component: "home.key-facts";
    title: string;
    featured: FeaturedItem[];
    with_container: boolean;
  }

  export interface StepByStep {
    id: number;
    __component: "home.step-by-step";
    title: string;
    with_container: boolean;
    steps: Step[];
  }
}