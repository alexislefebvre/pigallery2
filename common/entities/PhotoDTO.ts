import {DirectoryDTO} from './DirectoryDTO';

export interface PhotoDTO {
  id: number;
  name: string;
  directory: DirectoryDTO;
  metadata: PhotoMetadata;
  readyThumbnails: Array<number>;
  readyIcon: boolean;
}

export interface PhotoMetadata {
  keywords: Array<string>;
  cameraData: CameraMetadata;
  positionData: PositionMetaData;
  size: ImageSize;
  creationDate: number;
  fileSize: number;
}

export interface ImageSize {
  width: number;
  height: number;
}

export interface CameraMetadata {
  ISO?: number;
  model?: string;
  make?: string;
  fStop?: number;
  exposure?: number;
  focalLength?: number;
  lens?: string;
}

export interface PositionMetaData {
  GPSData?: GPSMetadata;
  country?: string;
  state?: string;
  city?: string;
}

export interface GPSMetadata {
  latitude?: number;
  longitude?: number;
  altitude?: number;
}

export module PhotoDTO {
  export const hasPositionData = (photo: PhotoDTO): boolean => {
    return !!photo.metadata.positionData &&
      !!(photo.metadata.positionData.city ||
        photo.metadata.positionData.state ||
        photo.metadata.positionData.country ||
        (photo.metadata.positionData.GPSData &&
          photo.metadata.positionData.GPSData.altitude &&
          photo.metadata.positionData.GPSData.latitude &&
          photo.metadata.positionData.GPSData.longitude));
  };
}
