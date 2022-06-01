package swEngineeringTeam1.closetProject;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@Table(name = "Clothes")
@NoArgsConstructor
public class ClothesEntity {

    @EmbeddedId
    private ClothesId clothesID;
    @MapsId("userCode")
    @ManyToOne
    @JoinColumn(name="userCode")
    private UserEntity user;

    private String season;
    private String color;
    private String type;
    private String metarial;
    private String clothesImage;


}
