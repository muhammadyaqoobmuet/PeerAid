package com.peeraid.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateResourceDto {
    private String name;
    private String description;
    private String category;
    private String resourceType;

}
