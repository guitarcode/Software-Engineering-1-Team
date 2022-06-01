package swEngineeringTeam1.closetProject;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Data
@Embeddable
public class CodyId implements Serializable {
    @Column(name = "clothesID")
    private Long clothesID;

    @Column(name = "userCode")
    private Long userCode;
}
