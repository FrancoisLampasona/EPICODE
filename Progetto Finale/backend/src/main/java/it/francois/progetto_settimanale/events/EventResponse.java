package it.francois.progetto_settimanale.events;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

import it.francois.progetto_settimanale.auth.AppUser;

@Data
@AllArgsConstructor
public class EventResponse {
    private Long id;
    private String title;
    private String description;
    private LocalDateTime date;
    private String location;
    private AppUser organizer;
    private List<AppUser> participants;
}
